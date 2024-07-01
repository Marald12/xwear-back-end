"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelModule = void 0;
const common_1 = require("@nestjs/common");
const model_service_1 = require("./model.service");
const model_controller_1 = require("./model.controller");
const model_model_1 = require("./model.model");
const mongoose_1 = require("@nestjs/mongoose");
const brand_service_1 = require("../brand/brand.service");
const brand_module_1 = require("../brand/brand.module");
const brand_model_1 = require("../brand/brand.model");
let ModelModule = class ModelModule {
};
exports.ModelModule = ModelModule;
exports.ModelModule = ModelModule = __decorate([
    (0, common_1.Module)({
        controllers: [model_controller_1.ModelController],
        providers: [model_service_1.ModelService, brand_service_1.BrandService],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: model_model_1.ModelEntity.name, schema: model_model_1.ModelSchema },
                { name: brand_model_1.Brand.name, schema: brand_model_1.BrandSchema }
            ]),
            brand_module_1.BrandModule
        ],
        exports: [model_service_1.ModelService]
    })
], ModelModule);
//# sourceMappingURL=model.module.js.map