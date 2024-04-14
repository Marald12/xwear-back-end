import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ModelService } from './model.service'
import { ModelDto } from './model.dto'

@Controller('model')
export class ModelController {
	constructor(private readonly modelService: ModelService) {}

	@Post()
	create(@Body() dto: ModelDto) {
		return this.modelService.create(dto)
	}

	@Get()
	findAll() {
		return this.modelService.findAll()
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.modelService.findOne(id)
	}
}
