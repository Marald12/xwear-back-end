import { Module } from '@nestjs/common'
import { BasketService } from './basket.service'
import { BasketController } from './basket.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Item, ItemSchema } from '../item/item.model'
import { Basket, BasketSchema } from './basket.model'
import { ItemService } from '../item/item.service'

@Module({
	controllers: [BasketController],
	providers: [BasketService, ItemService],
	imports: [
		MongooseModule.forFeature([
			{ name: Basket.name, schema: BasketSchema },
			{ name: Item.name, schema: ItemSchema }
		])
	],
	exports: [BasketService]
})
export class BasketModule {}
