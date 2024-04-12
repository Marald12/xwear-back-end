import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { JwtModule } from '@nestjs/jwt'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { jwtConfig } from 'src/config/jwt.config'
import { UserService } from 'src/user/user.service'
import { JwtStrategy } from './auth.strategies'
import { User, UserSchema } from 'src/user/user.model'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
	controllers: [AuthController],
	providers: [AuthService, UserService, JwtStrategy],
	imports: [
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: jwtConfig
		}),
		MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
		ConfigModule
	]
})
export class AuthModule {}
