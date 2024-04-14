import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { Brand } from 'src/brand/brand.model'
import * as mongoose from 'mongoose'
import { ModelEntity } from 'src/model/model.model'
import { Product } from 'src/product/product.model'

export type SizeDocument = HydratedDocument<Size>

@Schema({
	timestamps: true
})
export class Size {
	@Prop()
	size: number

	@Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] })
	products: Product[]
}

export const SizeSchema = SchemaFactory.createForClass(Size)
