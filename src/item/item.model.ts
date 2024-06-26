import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import { HydratedDocument } from 'mongoose'
import { Product } from '../product/product.model'
import { Basket } from '../basket/basket.model'

export type ItemDocument = HydratedDocument<Item>

@Schema()
export class Item {
	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Basket' })
	basket: Basket

	@Prop()
	count: number

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
	product: Product
}

export const ItemSchema = SchemaFactory.createForClass(Item)
