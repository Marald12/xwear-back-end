import { Module } from '@nestjs/common'
import { ProductService } from './product.service'
import { ProductController } from './product.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Product, ProductSchema } from './product.model'
import { Size, SizeSchema } from 'src/size/size.model'
import { SizeModule } from 'src/size/size.module'
import { SizeService } from 'src/size/size.service'
import { ModelEntity, ModelSchema } from 'src/model/model.model'
import { Brand, BrandSchema } from 'src/brand/brand.model'
import { ModelModule } from 'src/model/model.module'
import { BrandModule } from 'src/brand/brand.module'
import { Category, CategorySchema } from 'src/category/category.model'
import { CategoryModule } from 'src/category/category.module'
import {
	ProductCategory,
	ProductCategorySchema
} from 'src/product-category/product-category.model'
import { ProductCategoryModule } from 'src/product-category/product-category.module'
import { ModelService } from 'src/model/model.service'
import { BrandService } from 'src/brand/brand.service'
import { CategoryService } from 'src/category/category.service'
import { ProductCategoryService } from 'src/product-category/product-category.service'

@Module({
	controllers: [ProductController],
	providers: [
		ProductService,
		SizeService,
		ModelService,
		BrandService,
		CategoryService,
		ProductCategoryService
	],
	imports: [
		MongooseModule.forFeature([
			{ name: Product.name, schema: ProductSchema },
			{ name: Size.name, schema: SizeSchema },
			{ name: ModelEntity.name, schema: ModelSchema },
			{ name: Brand.name, schema: BrandSchema },
			{ name: Category.name, schema: CategorySchema },
			{ name: ProductCategory.name, schema: ProductCategorySchema }
		]),
		ModelModule,
		BrandModule,
		SizeModule,
		CategoryModule,
		ProductCategoryModule
	],
	exports: [ProductService]
})
export class ProductModule {}
