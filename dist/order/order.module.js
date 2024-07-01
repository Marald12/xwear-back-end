"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const common_1 = require("@nestjs/common");
const order_service_1 = require("./order.service");
const order_controller_1 = require("./order.controller");
const mongoose_1 = require("@nestjs/mongoose");
const order_model_1 = require("./order.model");
const basket_service_1 = require("../basket/basket.service");
const basket_model_1 = require("../basket/basket.model");
const user_service_1 = require("../user/user.service");
const user_model_1 = require("../user/user.model");
const product_service_1 = require("../product/product.service");
const product_model_1 = require("../product/product.model");
const mail_service_1 = require("../mail/mail.service");
const token_service_1 = require("../token/token.service");
const token_model_1 = require("../token/token.model");
const size_model_1 = require("../size/size.model");
const model_model_1 = require("../model/model.model");
const brand_model_1 = require("../brand/brand.model");
const category_model_1 = require("../category/category.model");
const product_category_model_1 = require("../product-category/product-category.model");
const size_service_1 = require("../size/size.service");
const model_service_1 = require("../model/model.service");
const brand_service_1 = require("../brand/brand.service");
const category_service_1 = require("../category/category.service");
const product_category_service_1 = require("../product-category/product-category.service");
let OrderModule = class OrderModule {
};
exports.OrderModule = OrderModule;
exports.OrderModule = OrderModule = __decorate([
    (0, common_1.Module)({
        controllers: [order_controller_1.OrderController],
        providers: [
            order_service_1.OrderService,
            user_service_1.UserService,
            basket_service_1.BasketService,
            product_service_1.ProductService,
            size_service_1.SizeService,
            model_service_1.ModelService,
            brand_service_1.BrandService,
            category_service_1.CategoryService,
            product_category_service_1.ProductCategoryService,
            mail_service_1.MailService,
            token_service_1.TokenService
        ],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: order_model_1.Order.name, schema: order_model_1.OrderSchema },
                { name: user_model_1.User.name, schema: user_model_1.UserSchema },
                { name: product_model_1.Product.name, schema: product_model_1.ProductSchema },
                { name: size_model_1.Size.name, schema: size_model_1.SizeSchema },
                { name: model_model_1.ModelEntity.name, schema: model_model_1.ModelSchema },
                { name: brand_model_1.Brand.name, schema: brand_model_1.BrandSchema },
                { name: category_model_1.Category.name, schema: category_model_1.CategorySchema },
                { name: product_category_model_1.ProductCategory.name, schema: product_category_model_1.ProductCategorySchema },
                { name: token_model_1.Token.name, schema: token_model_1.TokenSchema },
                { name: basket_model_1.Basket.name, schema: basket_model_1.BasketSchema }
            ])
        ]
    })
], OrderModule);
//# sourceMappingURL=order.module.js.map