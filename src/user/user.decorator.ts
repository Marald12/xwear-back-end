import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { User } from './user.model'
import * as mongoose from 'mongoose'

interface UserOfId {
	_id: mongoose.Types.ObjectId
}

export const CurrentUser = createParamDecorator(
	(data: keyof UserOfId, ctx: ExecutionContext) => {
		const request = ctx.switchToHttp().getRequest()
		const user = request.user

		return data ? user[data] : user
	}
)
