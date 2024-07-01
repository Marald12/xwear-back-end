"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const product_controller_1 = require("./product.controller");
const mongoose_1 = require("@nestjs/mongoose");
const product_model_1 = require("./product.model");
const size_model_1 = require("../size/size.model");
const size_module_1 = require("../size/size.module");
const size_service_1 = require("../size/size.service");
const model_model_1 = require("../model/model.model");
const brand_model_1 = require("../brand/brand.model");
const model_module_1 = require("../model/model.module");
const brand_module_1 = require("../brand/brand.module");
const category_model_1 = require("../category/category.model");
const category_module_1 = require("../category/category.module");
const product_category_model_1 = require("../product-category/product-category.model");
const product_category_module_1 = require("../product-category/product-category.module");
const model_service_1 = require("../model/model.service");
const brand_service_1 = require("../brand/brand.service");
const category_service_1 = require("../category/category.service");
const product_category_service_1 = require("../product-category/product-category.service");
let ProductModule = class ProductModule {
};
exports.ProductModule = ProductModule;
exports.ProductModule = ProductModule = __decorate([
    (0, common_1.Module)({
        controllers: [product_controller_1.ProductController],
        providers: [
            product_service_1.ProductService,
            size_service_1.SizeService,
            model_service_1.ModelService,
            brand_service_1.BrandService,
            category_service_1.CategoryService,
            product_category_service_1.ProductCategoryService
        ],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: product_model_1.Product.name, schema: product_model_1.ProductSchema },
                { name: size_model_1.Size.name, schema: size_model_1.SizeSchema },
                { name: model_model_1.ModelEntity.name, schema: model_model_1.ModelSchema },
                { name: brand_model_1.Brand.name, schema: brand_model_1.BrandSchema },
                { name: category_model_1.Category.name, schema: category_model_1.CategorySchema },
                { name: product_category_model_1.ProductCategory.name, schema: product_category_model_1.ProductCategorySchema }
            ]),
            model_module_1.ModelModule,
            brand_module_1.BrandModule,
            size_module_1.SizeModule,
            category_module_1.CategoryModule,
            product_category_module_1.ProductCategoryModule
        ],
        exports: [product_service_1.ProductService]
    })
], ProductModule);
//# sourceMappingURL=product.module.js.map