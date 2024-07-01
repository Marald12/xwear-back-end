"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const mongo_config_1 = require("./config/mongo.config");
const user_module_1 = require("./user/user.module");
const category_module_1 = require("./category/category.module");
const product_module_1 = require("./product/product.module");
const brand_module_1 = require("./brand/brand.module");
const model_module_1 = require("./model/model.module");
const size_module_1 = require("./size/size.module");
const product_category_module_1 = require("./product-category/product-category.module");
const auth_module_1 = require("./auth/auth.module");
const mail_module_1 = require("./mail/mail.module");
const service_module_1 = require("./service/service.module");
const token_module_1 = require("./token/token.module");
const basket_module_1 = require("./basket/basket.module");
const item_module_1 = require("./item/item.module");
const order_module_1 = require("./order/order.module");
const media_module_1 = require("./media/media.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                isGlobal: true
            }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: mongo_config_1.mongoConfig
            }),
            user_module_1.UserModule,
            category_module_1.CategoryModule,
            product_module_1.ProductModule,
            brand_module_1.BrandModule,
            model_module_1.ModelModule,
            size_module_1.SizeModule,
            product_category_module_1.ProductCategoryModule,
            auth_module_1.AuthModule,
            mail_module_1.MailModule,
            service_module_1.ServiceModule,
            token_module_1.TokenModule,
            basket_module_1.BasketModule,
            item_module_1.ItemModule,
            order_module_1.OrderModule,
            media_module_1.MediaModule
        ],
        controllers: [],
        providers: []
    })
], AppModule);
//# sourceMappingURL=app.module.js.map