import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserSchema } from './user.model'
import {
	ProductCategory,
	ProductCategorySchema
} from 'src/product-category/product-category.model'
import { ProductService } from 'src/product/product.service'
import { ProductModule } from 'src/product/product.module'
import { Category, CategorySchema } from 'src/category/category.model'
import { Brand, BrandSchema } from 'src/brand/brand.model'
import { ModelEntity, ModelSchema } from 'src/model/model.model'
import { Size, SizeSchema } from 'src/size/size.model'
import { Product, ProductSchema } from 'src/product/product.model'
import { SizeService } from 'src/size/size.service'
import { ModelService } from 'src/model/model.service'
import { BrandService } from 'src/brand/brand.service'
import { CategoryService } from 'src/category/category.service'
import { ProductCategoryService } from 'src/product-category/product-category.service'
import { ProductCategoryModule } from 'src/product-category/product-category.module'
import { CategoryModule } from 'src/category/category.module'
import { SizeModule } from 'src/size/size.module'
import { BrandModule } from 'src/brand/brand.module'
import { ModelModule } from 'src/model/model.module'
import { MailService } from '../mail/mail.service'
import { MailModule } from '../mail/mail.module'
import { TokenModule } from '../token/token.module'
import { Token, TokenSchema } from '../token/token.model'
import { TokenService } from '../token/token.service'

@Module({
	controllers: [UserController],
	providers: [
		UserService,
		ProductService,
		SizeService,
		ModelService,
		BrandService,
		CategoryService,
		ProductCategoryService,
		MailService,
		TokenService
	],
	imports: [
		MongooseModule.forFeature([
			{ name: User.name, schema: UserSchema },
			{ name: Product.name, schema: ProductSchema },
			{ name: Size.name, schema: SizeSchema },
			{ name: ModelEntity.name, schema: ModelSchema },
			{ name: Brand.name, schema: BrandSchema },
			{ name: Category.name, schema: CategorySchema },
			{ name: ProductCategory.name, schema: ProductCategorySchema },
			{ name: Token.name, schema: TokenSchema }
		]),
		ProductModule,
		ModelModule,
		BrandModule,
		SizeModule,
		CategoryModule,
		ProductCategoryModule,
		MailModule,
		TokenModule
	],
	exports: [UserService]
})
export class UserModule {}
