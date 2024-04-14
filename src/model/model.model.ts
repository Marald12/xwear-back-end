import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { Brand } from 'src/brand/brand.model'
import * as mongoose from 'mongoose'
import { Product } from 'src/product/product.model'

export type ModelDocument = HydratedDocument<ModelEntity>

@Schema({
	timestamps: true,
	collectionOptions: {
		dbName: 'Models'
	}
})
export class ModelEntity {
	@Prop()
	title: string

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Brand' })
	brand: Brand

	@Prop({
		type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
	})
	products: Product[]
}

export const ModelSchema = SchemaFactory.createForClass(ModelEntity)
