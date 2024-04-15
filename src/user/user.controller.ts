import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { CurrentUser } from './user.decorator'
import { Auth } from 'src/auth/auth.guard'
import { UpdatePasswordDto } from './dto/update-password.dto'
import { RestoreUserDto } from './dto/restore-user.dto'
import { UpdatePasswordFromTokenDto } from './dto/update-password-from-token.dto'

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post()
	create(@Body() createUserDto: CreateUserDto) {
		return this.userService.create(createUserDto)
	}

	@Get()
	findAll() {
		return this.userService.findAll()
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.userService.findOne(id)
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
		return this.userService.update(id, updateUserDto)
	}

	@Post('add-and-remove-like-product/:id')
	@Auth()
	addAndRemoveLikeProduct(@Param('id') id: string, @CurrentUser() user: any) {
		return this.userService.addAndRemoveLikeProduct(user._id, id)
	}

	@Put('update-password')
	@Auth()
	updatePassword(@CurrentUser() user: any, @Body() dto: UpdatePasswordDto) {
		return this.userService.updatePassword(user._id, dto)
	}

	@Post('restore-password')
	restorePassword(@Body() dto: RestoreUserDto) {
		return this.userService.restorePassword(dto)
	}

	@Put('update-password-from-token')
	updatePasswordFromToken(@Body() dto: UpdatePasswordFromTokenDto) {
		return this.userService.updatePasswordFromToken(dto)
	}
}
