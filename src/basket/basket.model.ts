import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import { HydratedDocument } from 'mongoose'
import { User } from '../user/user.model'
import { Item } from '../item/item.model'

export type BasketDocument = HydratedDocument<Basket>

@Schema()
export class Basket {
	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
	user: User

	@Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }] })
	items: Item[]
}

export const BasketSchema = SchemaFactory.createForClass(Basket)
