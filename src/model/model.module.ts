import { Module } from '@nestjs/common'
import { ModelService } from './model.service'
import { ModelController } from './model.controller'
import { Model, ModelSchema } from './model.model'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
	controllers: [ModelController],
	providers: [ModelService],
	imports: [
		MongooseModule.forFeature([{ name: Model.name, schema: ModelSchema }])
	]
})
export class ModelModule {}
