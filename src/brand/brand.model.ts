import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { ModelEntity } from 'src/model/model.model'
import * as mongoose from 'mongoose'
import { Product } from 'src/product/product.model'

export type BrandDocument = HydratedDocument<Brand>

@Schema({
	timestamps: true
})
export class Brand {
	@Prop()
	title: string

	@Prop({
		type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ModelEntity' }]
	})
	models: ModelEntity[]

	@Prop({
		type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
	})
	products: Product[]
}

export const BrandSchema = SchemaFactory.createForClass(Brand)
