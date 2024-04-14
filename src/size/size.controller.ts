import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { SizeService } from './size.service'
import { SizeDto } from './size.dto'

@Controller('size')
export class SizeController {
	constructor(private readonly sizeService: SizeService) {}

	@Post()
	create(@Body() dto: SizeDto) {
		return this.sizeService.create(dto)
	}

	@Get()
	findAll() {
		return this.sizeService.findAll()
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.sizeService.findOne(id)
	}

	@Get('by-size/:size')
	findBySize(@Param('size') size: string) {
		return this.sizeService.findBySize(+size)
	}
}
