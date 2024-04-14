import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { Product } from 'src/product/product.model'
import * as mongoose from 'mongoose'
import { ProductCategory } from 'src/product-category/product-category.model'

export type CategoryDocument = HydratedDocument<Category>

@Schema({
	timestamps: true
})
export class Category {
	@Prop()
	title: string

	@Prop({
		type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ProductCategory' }]
	})
	categories: ProductCategory[]

	@Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] })
	products: Product[]
}

export const CategorySchema = SchemaFactory.createForClass(Category)
