"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategoryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const product_category_model_1 = require("./product-category.model");
const mongoose_2 = require("mongoose");
const category_service_1 = require("../category/category.service");
let ProductCategoryService = class ProductCategoryService {
    constructor(productCategoryModel, categoryService) {
        this.productCategoryModel = productCategoryModel;
        this.categoryService = categoryService;
    }
    async create(dto) {
        const category = await this.categoryService.findOne(dto.categoryId);
        const productCategory = await this.productCategoryModel.create({
            title: dto.title,
            category: dto.categoryId
        });
        await category.updateOne({
            $push: {
                categories: productCategory._id
            }
        });
        return productCategory;
    }
    async findAll() {
        return await this.productCategoryModel.find().exec();
    }
    async findOne(id) {
        const productCategory = await await this.productCategoryModel
            .findById(id)
            .populate(['category', 'products'])
            .exec();
        if (!productCategory)
            throw new common_1.NotFoundException('Категория продукта не найдена');
        return productCategory;
    }
};
exports.ProductCategoryService = ProductCategoryService;
exports.ProductCategoryService = ProductCategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(product_category_model_1.ProductCategory.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        category_service_1.CategoryService])
], ProductCategoryService);
//# sourceMappingURL=product-category.service.js.map