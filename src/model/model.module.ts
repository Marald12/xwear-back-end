import { Module } from '@nestjs/common'
import { ModelService } from './model.service'
import { ModelController } from './model.controller'
import { ModelEntity, ModelSchema } from './model.model'
import { MongooseModule } from '@nestjs/mongoose'
import { BrandService } from 'src/brand/brand.service'
import { BrandModule } from 'src/brand/brand.module'
import { Brand, BrandSchema } from 'src/brand/brand.model'

@Module({
	controllers: [ModelController],
	providers: [ModelService, BrandService],
	imports: [
		MongooseModule.forFeature([
			{ name: ModelEntity.name, schema: ModelSchema },
			{ name: Brand.name, schema: BrandSchema }
		]),
		BrandModule
	],
	exports: [ModelService]
})
export class ModelModule {}
