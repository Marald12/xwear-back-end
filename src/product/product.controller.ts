import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Query
} from '@nestjs/common'
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
	findAll(
		@Query('search') searchTerm?: string,
		@Query('size') size?: string,
		@Query('model') model?: string,
		@Query('brand') brand?: string,
		@Query('category') category?: string,
		@Query('mainCategory') mainCategory?: string
	) {
		return this.productService.findAll(
			searchTerm,
			+size,
			model,
			brand,
			category,
			mainCategory
		)
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
