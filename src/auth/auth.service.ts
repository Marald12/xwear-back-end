import { BadRequestException, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { CreateUserDto } from 'src/user/dto/create-user.dto'
import { UserService } from 'src/user/user.service'
import * as mongoose from 'mongoose'
import { compare } from 'bcryptjs'
import { BasketService } from '../basket/basket.service'

@Injectable()
export class AuthService {
	constructor(
		private readonly jwtService: JwtService,
		private readonly userService: UserService,
		private readonly basketService: BasketService
	) {}

	async register(dto: CreateUserDto) {
		const user = await this.userService.create(dto)

		await this.basketService.create(user._id)

		return {
			user,
			token: await this.generateJwtToken(user._id)
		}
	}

	async login(dto: CreateUserDto) {
		const user = await this.userService.findByEmail(dto.email)

		const isValidPassword = await compare(dto.password, user.password)
		if (!isValidPassword) throw new BadRequestException('Пароли не совпадают')

		return {
			user,
			token: await this.generateJwtToken(user._id)
		}
	}

	private async generateJwtToken(_id: mongoose.Types.ObjectId) {
		return await this.jwtService.signAsync({ _id })
	}
}
