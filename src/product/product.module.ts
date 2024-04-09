import { Module } from '@nestjs/common'
import { ProductService } from './product.service'
import { ProductController } from './product.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Product, ProductSchema } from './product.model'

@Module({
	controllers: [ProductController],
	providers: [ProductService],
	imports: [
		MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])
	]
})
export class ProductModule {}
