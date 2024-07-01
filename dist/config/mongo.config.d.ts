import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';
export declare const mongoConfig: (configService: ConfigService) => Promise<MongooseModuleOptions>;
