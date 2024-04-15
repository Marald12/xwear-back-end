import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Token } from './token.model'
import { Model } from 'mongoose'
import { TokenDto } from './token.dto'

@Injectable()
export class TokenService {
	constructor(
		@InjectModel(Token.name) private readonly tokenModel: Model<Token>
	) {}

	async create(dto: TokenDto) {
		return await this.tokenModel.create({
			...dto
		})
	}

	async findOne(body: string) {
		const token = await this.tokenModel.findOne({ token: body })
		if (!token) throw new NotFoundException('Токен не найден')

		return token
	}

	async findOneAndDelete(body: string) {
		return await this.tokenModel.findOneAndDelete({ token: body })
	}
}
