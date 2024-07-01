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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelSchema = exports.ModelEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const brand_model_1 = require("../brand/brand.model");
const mongoose = require("mongoose");
let ModelEntity = class ModelEntity {
};
exports.ModelEntity = ModelEntity;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ModelEntity.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'Brand' }),
    __metadata("design:type", brand_model_1.Brand)
], ModelEntity.prototype, "brand", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
    }),
    __metadata("design:type", Array)
], ModelEntity.prototype, "products", void 0);
exports.ModelEntity = ModelEntity = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        collectionOptions: {
            dbName: 'Models'
        }
    })
], ModelEntity);
exports.ModelSchema = mongoose_1.SchemaFactory.createForClass(ModelEntity);
//# sourceMappingURL=model.model.js.map