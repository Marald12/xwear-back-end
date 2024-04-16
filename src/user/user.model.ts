import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import { HydratedDocument } from 'mongoose'
import { Product } from 'src/product/product.model'
import { Basket } from '../basket/basket.model'

export type UserDocument = HydratedDocument<User>

@Schema({
	timestamps: true
})
export class User {
	@Prop({ unique: true })
	email: string

	@Prop({ select: false })
	password: string

	@Prop()
	name?: string

	@Prop()
	surname?: string

	@Prop()
	phoneNumber?: string

	@Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] })
	likesProducts: Product[]

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Basket' })
	basket: Basket
}

export const UserSchema = SchemaFactory.createForClass(User)
