import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Order } from './order.model'
import { Model } from 'mongoose'
import { OrderDto } from './order.dto'
import { BasketService } from '../basket/basket.service'
import { UserService } from '../user/user.service'

@Injectable()
export class OrderService {
	constructor(
		@InjectModel(Order.name) private readonly orderModel: Model<Order>,
		private readonly basketService: BasketService,
		private readonly userService: UserService
	) {}

	async create(userId: string, dto: OrderDto) {
		const user = await this.userService.findOne(userId)
		// @ts-ignore
		const basket = await this.basketService.findOne(user.basket.id)

		const order = await this.orderModel.create({
			...dto,
			user: user._id,
			items: basket.items
		})

		await user.updateOne({
			$push: {
				orders: order._id
			}
		})

		return order
	}

	async findAll() {
		return await this.orderModel.find().populate(['user', 'items']).exec()
	}

	async findOne(id: string) {
		return await this.orderModel.findById(id).populate(['user', 'items']).exec()
	}
}
