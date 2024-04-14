import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { ProductService } from './product.service'
import { ProductDto } from './product.dto'

@Controller('product')
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@Post()
	create(@Body() dto: ProductDto) {
		return this.productService.create(dto)
	}

	@Get()
	findAll() {
		return this.productService.findAll()
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.productService.findOne(id)
	}

	@Delete(':id')
	delete(@Param('id') id: string) {
		return this.productService.delete(id)
	}
}
