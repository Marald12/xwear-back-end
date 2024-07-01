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
exports.ModelService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const model_model_1 = require("./model.model");
const mongoose_2 = require("mongoose");
const brand_service_1 = require("../brand/brand.service");
let ModelService = class ModelService {
    constructor(modelModel, brandService) {
        this.modelModel = modelModel;
        this.brandService = brandService;
    }
    async create(dto) {
        const brand = await this.brandService.findOne(dto.brandId);
        const model = await this.modelModel.create({
            title: dto.title,
            brand: dto.brandId
        });
        await brand.updateOne({
            $push: {
                models: model._id
            }
        });
        return model;
    }
    async findAll() {
        return this.modelModel.find().exec();
    }
    async findOne(id) {
        const model = (await this.modelModel.findById(id)).populate('brand');
        if (!model)
            throw new common_1.NotFoundException('Модель не найдена');
        return model;
    }
};
exports.ModelService = ModelService;
exports.ModelService = ModelService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(model_model_1.ModelEntity.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        brand_service_1.BrandService])
], ModelService);
//# sourceMappingURL=model.service.js.map