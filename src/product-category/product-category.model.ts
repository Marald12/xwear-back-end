import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { Product } from 'src/product/product.model'
import * as mongoose from 'mongoose'
import { Category } from 'src/category/category.model'

export type ProductCategoryDocument = HydratedDocument<ProductCategory>

@Schema({
	timestamps: true
})
export class ProductCategory {
	@Prop()
	title: string

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
	category: Category

	@Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] })
	products: Product[]
}

export const ProductCategorySchema =
	SchemaFactory.createForClass(ProductCategory)
