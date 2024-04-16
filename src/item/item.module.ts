import { Module } from '@nestjs/common'
import { ItemService } from './item.service'
import { ItemController } from './item.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Item, ItemSchema } from './item.model'
import { Basket, BasketSchema } from '../basket/basket.model'
import { BasketService } from '../basket/basket.service'
import { User, UserSchema } from '../user/user.model'
import { Product, ProductSchema } from '../product/product.model'
import { Size, SizeSchema } from '../size/size.model'
import { ModelEntity, ModelSchema } from '../model/model.model'
import { Brand, BrandSchema } from '../brand/brand.model'
import { Category, CategorySchema } from '../category/category.model'
import {
	ProductCategory,
	ProductCategorySchema
} from '../product-category/product-category.model'
import { Token, TokenSchema } from '../token/token.model'
import { UserService } from '../user/user.service'
import { ProductService } from '../product/product.service'
import { SizeService } from '../size/size.service'
import { ModelService } from '../model/model.service'
import { BrandService } from '../brand/brand.service'
import { CategoryService } from '../category/category.service'
import { ProductCategoryService } from '../product-category/product-category.service'
import { MailService } from '../mail/mail.service'
import { TokenService } from '../token/token.service'

@Module({
	controllers: [ItemController],
	providers: [
		ItemService,
		BasketService,
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
			{ name: Item.name, schema: ItemSchema },
			{ name: Basket.name, schema: BasketSchema },
			{ name: User.name, schema: UserSchema },
			{ name: Product.name, schema: ProductSchema },
			{ name: Size.name, schema: SizeSchema },
			{ name: ModelEntity.name, schema: ModelSchema },
			{ name: Brand.name, schema: BrandSchema },
			{ name: Category.name, schema: CategorySchema },
			{ name: ProductCategory.name, schema: ProductCategorySchema },
			{ name: Token.name, schema: TokenSchema }
		])
	],
	exports: [ItemService]
})
export class ItemModule {}
