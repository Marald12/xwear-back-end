"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const jwt_config_1 = require("../config/jwt.config");
const user_service_1 = require("../user/user.service");
const auth_strategies_1 = require("./auth.strategies");
const user_model_1 = require("../user/user.model");
const mongoose_1 = require("@nestjs/mongoose");
const product_service_1 = require("../product/product.service");
const product_module_1 = require("../product/product.module");
const category_model_1 = require("../category/category.model");
const brand_model_1 = require("../brand/brand.model");
const model_model_1 = require("../model/model.model");
const size_model_1 = require("../size/size.model");
const product_model_1 = require("../product/product.model");
const size_service_1 = require("../size/size.service");
const model_service_1 = require("../model/model.service");
const brand_service_1 = require("../brand/brand.service");
const category_service_1 = require("../category/category.service");
const product_category_service_1 = require("../product-category/product-category.service");
const product_category_module_1 = require("../product-category/product-category.module");
const category_module_1 = require("../category/category.module");
const size_module_1 = require("../size/size.module");
const brand_module_1 = require("../brand/brand.module");
const model_module_1 = require("../model/model.module");
const product_category_model_1 = require("../product-category/product-category.model");
const mail_service_1 = require("../mail/mail.service");
const mail_module_1 = require("../mail/mail.module");
const token_model_1 = require("../token/token.model");
const token_module_1 = require("../token/token.module");
const token_service_1 = require("../token/token.service");
const basket_service_1 = require("../basket/basket.service");
const basket_model_1 = require("../basket/basket.model");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService,
            user_service_1.UserService,
            auth_strategies_1.JwtStrategy,
            product_service_1.ProductService,
            size_service_1.SizeService,
            model_service_1.ModelService,
            brand_service_1.BrandService,
            category_service_1.CategoryService,
            product_category_service_1.ProductCategoryService,
            mail_service_1.MailService,
            token_service_1.TokenService,
            basket_service_1.BasketService
        ],
        imports: [
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: jwt_config_1.jwtConfig
            }),
            mongoose_1.MongooseModule.forFeature([
                { name: user_model_1.User.name, schema: user_model_1.UserSchema },
                { name: product_model_1.Product.name, schema: product_model_1.ProductSchema },
                { name: size_model_1.Size.name, schema: size_model_1.SizeSchema },
                { name: model_model_1.ModelEntity.name, schema: model_model_1.ModelSchema },
                { name: brand_model_1.Brand.name, schema: brand_model_1.BrandSchema },
                { name: category_model_1.Category.name, schema: category_model_1.CategorySchema },
                { name: product_category_model_1.ProductCategory.name, schema: product_category_model_1.ProductCategorySchema },
                { name: token_model_1.Token.name, schema: token_model_1.TokenSchema },
                { name: basket_model_1.Basket.name, schema: basket_model_1.BasketSchema }
            ]),
            config_1.ConfigModule,
            product_module_1.ProductModule,
            model_module_1.ModelModule,
            brand_module_1.BrandModule,
            size_module_1.SizeModule,
            category_module_1.CategoryModule,
            product_category_module_1.ProductCategoryModule,
            mail_module_1.MailModule,
            token_module_1.TokenModule
        ]
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map