import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { BrandService } from './brand.service'
import { BrandDto } from './brand.dto'

@Controller('brand')
export class BrandController {
	constructor(private readonly brandService: BrandService) {}

	@Post()
	create(@Body() dto: BrandDto) {
		return this.brandService.create(dto)
	}

	@Get()
	findAll() {
		return this.brandService.findAll()
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.brandService.findOne(id)
	}
}
