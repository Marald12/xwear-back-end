import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { CategoryService } from './category.service'
import { CategoryDto } from './category.dto'

@Controller('category')
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) {}

	@Post()
	create(@Body() dto: CategoryDto) {
		return this.categoryService.create(dto)
	}

	@Get()
	findAll() {
		return this.categoryService.findAll()
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.categoryService.findOne(id)
	}
}
