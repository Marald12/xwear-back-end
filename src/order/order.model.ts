import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import { HydratedDocument } from 'mongoose'
import { Item } from '../item/item.model'
import { User } from '../user/user.model'

export type OrderDocument = HydratedDocument<Order>

@Schema({
	timestamps: true
})
export class Order {
	@Prop()
	companyName?: string

	@Prop()
	country: string

	@Prop()
	street: string

	@Prop()
	city: string

	@Prop()
	region: string

	@Prop()
	numberHouse: string

	@Prop()
	postcode: string

	@Prop({ default: 'В обработке' })
	status: 'Отправка' | 'В обработке'

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
	user: User

	@Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }] })
	items: Item[]
}

export const OrderSchema = SchemaFactory.createForClass(Order)
