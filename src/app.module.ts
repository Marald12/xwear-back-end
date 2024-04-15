import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { mongoConfig } from './config/mongo.config'
import { UserModule } from './user/user.module'
import { CategoryModule } from './category/category.module'
import { ProductModule } from './product/product.module'
import { BrandModule } from './brand/brand.module'
import { ModelModule } from './model/model.module'
import { SizeModule } from './size/size.module'
import { ProductCategoryModule } from './product-category/product-category.module'
import { AuthModule } from './auth/auth.module'
import { MailModule } from './mail/mail.module';
import { ServiceModule } from './service/service.module';
import { TokenModule } from './token/token.module';
import { BasketModule } from './basket/basket.module';
import { ItemModule } from './item/item.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: '.env',
			isGlobal: true
		}),
		MongooseModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: mongoConfig
		}),
		UserModule,
		CategoryModule,
		ProductModule,
		BrandModule,
		ModelModule,
		SizeModule,
		ProductCategoryModule,
		AuthModule,
		MailModule,
		ServiceModule,
		TokenModule,
		BasketModule,
		ItemModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}
