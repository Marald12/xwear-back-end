import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { InjectModel } from '@nestjs/mongoose'
import { User } from 'src/user/user.model'
import { Model } from 'mongoose'
import * as mongoose from 'mongoose'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(
		@InjectModel(User.name) private readonly userModel: Model<User>,
		private readonly configService: ConfigService
	) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: configService.get('JWT_SECRET')
		})
	}

	async validate({
		_id
	}: {
		_id: mongoose.Types.ObjectId | mongoose.Schema.Types.ObjectId
	}) {
		return await this.userModel.findById(_id).exec()
	}
}
