import { Module } from '@nestjs/common'
import { ItemService } from './item.service'
import { ItemController } from './item.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Item, ItemSchema } from './item.model'
import { Basket, BasketSchema } from '../basket/basket.model'
import { BasketService } from '../basket/basket.service'

@Module({
	controllers: [ItemController],
	providers: [ItemService, BasketService],
	imports: [
		MongooseModule.forFeature([
			{ name: Item.name, schema: ItemSchema },
			{ name: Basket.name, schema: BasketSchema }
		])
	],
	exports: [ItemService]
})
export class ItemModule {}
