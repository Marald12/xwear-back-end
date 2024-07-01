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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const product_model_1 = require("./product.model");
const mongoose_2 = require("mongoose");
const size_service_1 = require("../size/size.service");
const model_service_1 = require("../model/model.service");
const brand_service_1 = require("../brand/brand.service");
const category_service_1 = require("../category/category.service");
const product_category_service_1 = require("../product-category/product-category.service");
let ProductService = class ProductService {
    constructor(productModel, sizeService, modelService, brandService, categoryService, productCategoryService) {
        this.productModel = productModel;
        this.sizeService = sizeService;
        this.modelService = modelService;
        this.brandService = brandService;
        this.categoryService = categoryService;
        this.productCategoryService = productCategoryService;
    }
    async create(dto) {
        const sizes = await this.sizeService.findManyBySize(dto.sizes);
        const model = await this.modelService.findOne(dto.modelId);
        const brand = await this.brandService.findOne(dto.brandId);
        const category = await this.categoryService.findOne(dto.mainCategoryId);
        const productCategory = await this.productCategoryService.findOne(dto.categoryId);
        const product = await this.productModel.create({
            title: dto.title,
            price: dto.price,
            images: dto.images,
            brand: brand._id,
            maincategory: category._id,
            category: productCategory._id,
            model: model._id,
            sizes
        });
        for (const key in sizes) {
            const size = await this.sizeService.findBySize(sizes[key].size);
            await size.updateOne({
                $push: {
                    products: product._id
                }
            });
        }
        await brand.updateOne({
            $push: {
                products: product._id
            }
        });
        await model.updateOne({
            $push: {
                products: product._id
            }
        });
        await category.updateOne({
            $push: {
                products: product._id
            }
        });
        await category.updateOne({
            $push: {
                products: product._id
            }
        });
        await productCategory.updateOne({
            $push: {
                products: product._id
            }
        });
        return product;
    }
    async findAll(searchTerm, size, model, brand, category, mainCategory, skip, limit) {
        let searchOptions = {};
        if (searchTerm) {
            searchOptions = {
                title: {
                    $regex: searchTerm
                }
            };
        }
        if (size) {
            const sizeModel = await this.sizeService.findBySize(size);
            searchOptions = {
                ...searchOptions,
                sizes: sizeModel._id
            };
        }
        if (model) {
            searchOptions = {
                ...searchOptions,
                model
            };
        }
        if (brand) {
            searchOptions = {
                ...searchOptions,
                brand
            };
        }
        if (category) {
            searchOptions = {
                ...searchOptions,
                category
            };
        }
        if (mainCategory) {
            searchOptions = {
                ...searchOptions,
                maincategory: mainCategory
            };
        }
        return await this.productModel
            .find({
            ...searchOptions
        })
            .populate(['sizes', 'brand', 'model', 'maincategory', 'category'])
            .limit(limit)
            .skip(skip)
            .exec();
    }
    async findOne(id) {
        const product = await this.productModel
            .findById(id)
            .populate(['sizes', 'brand', 'model', 'maincategory', 'category'])
            .exec();
        if (!product)
            throw new common_1.NotFoundException('Продукт не найден');
        return product;
    }
    async delete(id) {
        const product = await this.findOne(id);
        const model = await this.modelService.findOne(product.model._id);
        const brand = await this.brandService.findOne(product.brand._id);
        const category = await this.categoryService.findOne(product.maincategory._id);
        const productCategory = await this.productCategoryService.findOne(product.category._id);
        for (const key in product.sizes) {
            const size = await this.sizeService.findBySize(product.sizes[key].size);
            await size.updateOne({
                $pull: {
                    products: product._id
                }
            });
        }
        await model.updateOne({
            $pull: {
                products: product._id
            }
        });
        await brand.updateOne({
            $pull: {
                products: product._id
            }
        });
        await category.updateOne({
            $pull: {
                products: product._id
            }
        });
        await productCategory.updateOne({
            $pull: {
                products: product._id
            }
        });
        await this.productModel.findByIdAndDelete(id);
        return 'Продукт успешно удалён';
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(product_model_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        size_service_1.SizeService,
        model_service_1.ModelService,
        brand_service_1.BrandService,
        category_service_1.CategoryService,
        product_category_service_1.ProductCategoryService])
], ProductService);
//# sourceMappingURL=product.service.js.map