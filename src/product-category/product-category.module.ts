import { Module } from '@nestjs/common'
import { ProductCategoryService } from './product-category.service'
import { ProductCategoryController } from './product-category.controller'
import { MongooseModule } from '@nestjs/mongoose'
import {
	ProductCategory,
	ProductCategorySchema
} from './product-category.model'
import { Category, CategorySchema } from 'src/category/category.model'
import { CategoryModule } from 'src/category/category.module'
import { CategoryService } from 'src/category/category.service'

@Module({
	controllers: [ProductCategoryController],
	providers: [ProductCategoryService, CategoryService],
	imports: [
		MongooseModule.forFeature([
			{ name: ProductCategory.name, schema: ProductCategorySchema },
			{ name: Category.name, schema: CategorySchema }
		]),
		CategoryModule
	],
	exports: [ProductCategoryService]
})
export class ProductCategoryModule {}
