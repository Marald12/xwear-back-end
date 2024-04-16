import { Controller, Param, Post } from '@nestjs/common'
import { ItemService } from './item.service'
import { Auth } from '../auth/auth.guard'
import { CurrentUser } from '../user/user.decorator'

@Controller('item')
export class ItemController {
	constructor(private readonly itemService: ItemService) {}

	@Post('add/:id')
	@Auth()
	addProduct(@CurrentUser() user: any, @Param('id') id: string) {
		return this.itemService.addProduct(id, user._id)
	}

	@Post('remove/:id')
	@Auth()
	removeProduct(@CurrentUser() user: any, @Param('id') id: string) {
		return this.itemService.removeProduct(id, user._id)
	}
}
