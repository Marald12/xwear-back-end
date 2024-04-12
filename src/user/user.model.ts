import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { Product } from 'src/product/product.model'
import * as mongoose from 'mongoose'

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
}

export const UserSchema = SchemaFactory.createForClass(User)
