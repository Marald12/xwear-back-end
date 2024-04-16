import { Controller, Get, Param, Post } from '@nestjs/common'
import { BasketService } from './basket.service'
import { Auth } from '../auth/auth.guard'
import { CurrentUser } from '../user/user.decorator'

@Controller('basket')
export class BasketController {
	constructor(private readonly basketService: BasketService) {}

	@Post()
	@Auth()
	create(@CurrentUser() user: any) {
		return this.basketService.create(user._id)
	}

	@Get()
	findAll() {
		return this.basketService.findAll()
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.basketService.findOne(id)
	}
}
