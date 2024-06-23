import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Basket } from './basket.model'
import * as mongoose from 'mongoose'
import { Model } from 'mongoose'

@Injectable()
export class BasketService {
	constructor(
		@InjectModel(Basket.name) private readonly basketModel: Model<Basket>
	) {}

	async create(userId: string | mongoose.Types.ObjectId) {
		const basket = await this.basketModel.create({
			user: userId
		})

		return basket
	}

	async findAll() {
		return await this.basketModel.find().exec()
	}

	async findOne(id: string) {
		const basket = await this.basketModel.findById(id).populate({
			path: 'items',
			populate: 'product'
		})
		if (!basket) throw new NotFoundException('Корзина не найдена')

		return basket
	}
}
