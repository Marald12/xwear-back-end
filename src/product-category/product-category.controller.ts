import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ProductCategoryService } from './product-category.service'
import { ProductCategoryDto } from './product-category.dto'

@Controller('product-category')
export class ProductCategoryController {
	constructor(
		private readonly productCategoryService: ProductCategoryService
	) {}

	@Post()
	create(@Body() dto: ProductCategoryDto) {
		return this.productCategoryService.create(dto)
	}

	@Get()
	findAll() {
		return this.productCategoryService.findAll()
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.productCategoryService.findOne(id)
	}
}
