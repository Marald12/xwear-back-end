import { Module } from '@nestjs/common'
import { MailService } from './mail.service'
import { MailerModule } from '@nestjs-modules/mailer'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { getMailConfig } from '../config/mail.config'

@Module({
	providers: [MailService, ConfigService],
	imports: [
		MailerModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getMailConfig
		}),
		ConfigModule
	],
	exports: [MailService]
})
export class MailModule {}
