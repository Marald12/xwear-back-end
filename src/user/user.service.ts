import {
	BadRequestException,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { InjectModel } from '@nestjs/mongoose'
import { User } from './user.model'
import { Model } from 'mongoose'
import { genSalt, hash } from 'bcryptjs'
import e from 'express'

@Injectable()
export class UserService {
	constructor(
		@InjectModel(User.name) private readonly userModel: Model<User>
	) {}

	async create(dto: CreateUserDto) {
		const oldUser = await this.userModel.findOne({ email: dto.email }).exec()
		if (oldUser)
			throw new BadRequestException(
				'Пользователь с таким E-mail уже существует'
			)

		const salt = await genSalt(10)
		const hashPassword = await hash(dto.password, salt)

		return await this.userModel.create({
			email: dto.email,
			password: hashPassword
		})
	}

	async findByEmail(email: string) {
		const user = await this.userModel
			.findOne({ email })
			.select('password')
			.exec()
		if (!user)
			throw new NotFoundException('Пользователь с таким E-mail не найден')

		return user
	}

	async findAll() {
		return await this.userModel.find().populate('likesProducts').exec()
	}

	async findOne(id: string) {
		const user = await this.userModel.findById(id).exec()
		if (!user) throw new NotFoundException('Пользователь не найден')

		return user
	}

	async update(id: string, dto: UpdateUserDto) {
		return await this.userModel.findByIdAndUpdate(
			id,
			{
				...dto
			},
			{ new: true }
		)
	}
}
