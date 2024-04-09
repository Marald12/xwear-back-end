import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { Model } from 'src/model/model.model'
import * as mongoose from 'mongoose'

export type BrandDocument = HydratedDocument<Brand>

@Schema({
	timestamps: true
})
export class Brand {
	@Prop()
	title: string

	@Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Model' }] })
	models: Model[]
}

export const BrandSchema = SchemaFactory.createForClass(Brand)
