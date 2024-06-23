import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { OrderService } from './order.service'
import { Auth } from '../auth/auth.guard'
import { CurrentUser } from '../user/user.decorator'
import { OrderDto } from './order.dto'

@Controller('order')
export class OrderController {
	constructor(private readonly orderService: OrderService) {}

	@Post()
	@Auth()
	create(@CurrentUser() user: any, @Body() dto: OrderDto) {
		return this.orderService.create(user._id, dto)
	}

	@Get()
	findAll() {
		return this.orderService.findAll()
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.orderService.findOne(id)
	}
}
