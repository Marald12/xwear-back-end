import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { JwtModule } from '@nestjs/jwt'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { jwtConfig } from 'src/config/jwt.config'
import { UserService } from 'src/user/user.service'
import { JwtStrategy } from './auth.strategies'
import { User, UserSchema } from 'src/user/user.model'
import { MongooseModule } from '@nestjs/mongoose'
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
import {
	ProductCategory,
	ProductCategorySchema
} from 'src/product-category/product-category.model'
import { MailService } from '../mail/mail.service'
import { MailModule } from '../mail/mail.module'
import { Token, TokenSchema } from '../token/token.model'
import { TokenModule } from '../token/token.module'
import { TokenService } from '../token/token.service'
import { BasketService } from '../basket/basket.service'
import { Basket, BasketSchema } from '../basket/basket.model'

@Module({
	controllers: [AuthController],
	providers: [
		AuthService,
		UserService,
		JwtStrategy,
		ProductService,
		SizeService,
		ModelService,
		BrandService,
		CategoryService,
		ProductCategoryService,
		MailService,
		TokenService,
		BasketService
	],
	imports: [
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: jwtConfig
		}),
		MongooseModule.forFeature([
			{ name: User.name, schema: UserSchema },
			{ name: Product.name, schema: ProductSchema },
			{ name: Size.name, schema: SizeSchema },
			{ name: ModelEntity.name, schema: ModelSchema },
			{ name: Brand.name, schema: BrandSchema },
			{ name: Category.name, schema: CategorySchema },
			{ name: ProductCategory.name, schema: ProductCategorySchema },
			{ name: Token.name, schema: TokenSchema },
			{ name: Basket.name, schema: BasketSchema }
		]),
		ConfigModule,
		ProductModule,
		ModelModule,
		BrandModule,
		SizeModule,
		CategoryModule,
		ProductCategoryModule,
		MailModule,
		TokenModule
	]
})
export class AuthModule {}
