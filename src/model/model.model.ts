import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { Brand } from 'src/brand/brand.model'
import * as mongoose from 'mongoose'

export type ModelDocument = HydratedDocument<Model>

@Schema({
	timestamps: true
})
export class Model {
	@Prop()
	title: string

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Brand' })
	brand: Brand
}

export const ModelSchema = SchemaFactory.createForClass(Model)
