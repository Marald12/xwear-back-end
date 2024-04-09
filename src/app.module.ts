import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { mongoConfig } from './config/mongo.config'
import { UserModule } from './user/user.module'
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { BrandModule } from './brand/brand.module';
import { ModelModule } from './model/model.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: '.env'
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
		ModelModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}
