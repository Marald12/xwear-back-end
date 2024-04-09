import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { Brand } from 'src/brand/brand.model'
import * as mongoose from 'mongoose'
import { Model } from 'src/model/model.model'

export type ProductDocument = HydratedDocument<Product>

@Schema({
	timestamps: true
})
export class Product {
	@Prop()
	title: string

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Brand' })
	brand: Brand

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Model' })
	model: Model
}

export const ProductSchema = SchemaFactory.createForClass(Product)
