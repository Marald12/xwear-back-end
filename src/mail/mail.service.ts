import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { MailerService } from '@nestjs-modules/mailer'
import { ConfigService } from '@nestjs/config'
import { join } from 'path'
import { RestoreUserDto } from '../user/dto/restore-user.dto'

@Injectable()
export class MailService {
	constructor(
		private readonly mailerService: MailerService,
		private readonly configService: ConfigService
	) {}

	async sendConfirmMail(user: RestoreUserDto, token: string) {
		const url = this.configService.get<string>('URL_CONFIRM_ADDRESS')
		const urlConfirmAddress = `${url}/${token}`

		return await this.mailerService
			.sendMail({
				to: user.email,
				subject: 'Восстановления пароля',
				template: join(__dirname, 'templates', 'confirmReg'),
				context: {
					urlConfirmAddress
				}
			})
			.catch(e => {
				throw new HttpException(
					`Ошибка работы почты: ${JSON.stringify(e)}`,
					HttpStatus.UNPROCESSABLE_ENTITY
				)
			})
	}
}
