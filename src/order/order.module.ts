import { Module } from '@nestjs/common'
import { OrderService } from './order.service'
import { OrderController } from './order.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Order, OrderSchema } from './order.model'
import { BasketService } from '../basket/basket.service'
import { Basket, BasketSchema } from '../basket/basket.model'
import { UserService } from '../user/user.service'
import { User, UserSchema } from '../user/user.model'
import { ProductService } from '../product/product.service'
import { Product, ProductSchema } from '../product/product.model'
import { MailService } from '../mail/mail.service'
import { TokenService } from '../token/token.service'
import { Token, TokenSchema } from '../token/token.model'
import { Size, SizeSchema } from '../size/size.model'
import { ModelEntity, ModelSchema } from '../model/model.model'
import { Brand, BrandSchema } from '../brand/brand.model'
import { Category, CategorySchema } from '../category/category.model'
import {
	ProductCategory,
	ProductCategorySchema
} from '../product-category/product-category.model'
import { SizeService } from '../size/size.service'
import { ModelService } from '../model/model.service'
import { BrandService } from '../brand/brand.service'
import { CategoryService } from '../category/category.service'
import { ProductCategoryService } from '../product-category/product-category.service'

@Module({
	controllers: [OrderController],
	providers: [
		OrderService,
		UserService,
		BasketService,
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
			{ name: Order.name, schema: OrderSchema },
			{ name: User.name, schema: UserSchema },
			{ name: Product.name, schema: ProductSchema },
			{ name: Size.name, schema: SizeSchema },
			{ name: ModelEntity.name, schema: ModelSchema },
			{ name: Brand.name, schema: BrandSchema },
			{ name: Category.name, schema: CategorySchema },
			{ name: ProductCategory.name, schema: ProductCategorySchema },
			{ name: Token.name, schema: TokenSchema },
			{ name: Basket.name, schema: BasketSchema }
		])
	]
})
export class OrderModule {}
