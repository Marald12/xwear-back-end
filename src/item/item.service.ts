import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Item } from './item.model'
import { UserService } from '../user/user.service'
import { BasketService } from '../basket/basket.service'

@Injectable()
export class ItemService {
	constructor(
		@InjectModel(Item.name) private readonly itemModel: Model<Item>,
		private readonly userService: UserService,
		private readonly basketService: BasketService
	) {}

	async addProduct(productId: string, userId: string) {
		const user = await this.userService.findOne(userId)
		// @ts-ignore
		const basket = await this.basketService.findOne(user.basket._id)
		let isProduct = false

		for (const key in basket.items) {
			const item = await this.itemModel
				.findById(basket.items[key])
				.populate('product')

			// @ts-ignore
			if (item.product.id == productId) {
				isProduct = true
				await item.updateOne({
					count: (item.count += 1)
				})

				return item
			}
		}

		if (!isProduct) {
			const item = await this.itemModel.create({
				basket: basket._id,
				count: 1,
				product: productId
			})
			await basket.updateOne({
				$push: {
					items: item._id
				}
			})

			return item
		}
	}

	async removeProduct(productId: string, userId: string) {
		const user = await this.userService.findOne(userId)
		// @ts-ignore
		const basket = await this.basketService.findOne(user.basket._id)

		for (const key in basket.items) {
			const item = await this.itemModel
				// @ts-ignore
				.findById(basket.items[key]._id)
				.populate('product')
			// @ts-ignore
			if (item.product.id == productId) {
				if (item.count == 1) {
					await this.itemModel.findByIdAndDelete(item._id)

					await basket.updateOne({
						$pull: {
							items: item._id
						}
					})

					return 'Продукт успешно удалён'
				}
				await item.updateOne(
					{
						count: item.count - 1
					},
					{
						new: true
					}
				)

				return await this.itemModel
					// @ts-ignore
					.findById(basket.items[key]._id)
					.populate('product')
			}
		}
	}
}
