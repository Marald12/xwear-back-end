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
import { compare, genSalt, hash } from 'bcryptjs'
import { ProductService } from 'src/product/product.service'
import { UpdatePasswordDto } from './dto/update-password.dto'
import { RestoreUserDto } from './dto/restore-user.dto'
import { MailService } from '../mail/mail.service'
import { TokenService } from '../token/token.service'
import { UpdatePasswordFromTokenDto } from './dto/update-password-from-token.dto'

@Injectable()
export class UserService {
	constructor(
		@InjectModel(User.name) private readonly userModel: Model<User>,
		private readonly productService: ProductService,
		private readonly mailService: MailService,
		private readonly tokenService: TokenService
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
		const user = await this.userModel
			.findById(id)
			.populate('likesProducts')
			.exec()
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

	async addAndRemoveLikeProduct(userId: string, productId: string) {
		const user = await this.findOne(userId)
		const product = await this.productService.findOne(productId)
		let isProductInLikes = false

		user.likesProducts.forEach(item => {
			// @ts-ignore
			if (item.id === product.id) return (isProductInLikes = true)
		})

		if (isProductInLikes)
			await user.updateOne({
				$pull: {
					likesProducts: product._id
				}
			})
		if (!isProductInLikes)
			await user.updateOne({
				$push: {
					likesProducts: product._id
				}
			})

		return await this.findOne(userId)
	}

	async updatePassword(userId: string, dto: UpdatePasswordDto) {
		const user = await this.userModel.findById(userId).select('password')

		const isValidPassword = await compare(dto.oldPassword, user.password)
		if (!isValidPassword) throw new BadRequestException('Неверный пароль')

		const salt = await genSalt(10)
		const hashPassword = await hash(dto.newPassword, salt)

		await user.updateOne({
			password: hashPassword
		})

		return 'Пароль успешно изменён'
	}

	async restorePassword(dto: RestoreUserDto) {
		const alphabet = 'abcdefghijklmnopqrstuvwxyz'
		let randomToken = ''
		while (randomToken.length < 22)
			randomToken += alphabet[Math.floor(Math.random() * alphabet.length)]

		await this.mailService.sendConfirmMail({ ...dto }, randomToken)

		return await this.tokenService.create({
			token: randomToken,
			email: dto.email
		})
	}

	async updatePasswordFromToken(dto: UpdatePasswordFromTokenDto) {
		const token = await this.tokenService.findOne(dto.token)
		const user = await this.findByEmail(token.email)

		const salt = await genSalt(10)
		const hashPassword = await hash(dto.password, salt)

		await user.updateOne({
			password: hashPassword
		})

		await this.tokenService.findOneAndDelete(dto.token)

		return 'Пароль успешно изменён'
	}
}
