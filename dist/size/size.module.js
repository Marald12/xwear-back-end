"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeModule = void 0;
const common_1 = require("@nestjs/common");
const size_service_1 = require("./size.service");
const size_controller_1 = require("./size.controller");
const mongoose_1 = require("@nestjs/mongoose");
const size_model_1 = require("./size.model");
let SizeModule = class SizeModule {
};
exports.SizeModule = SizeModule;
exports.SizeModule = SizeModule = __decorate([
    (0, common_1.Module)({
        controllers: [size_controller_1.SizeController],
        providers: [size_service_1.SizeService],
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: size_model_1.Size.name, schema: size_model_1.SizeSchema }])
        ],
        exports: [size_service_1.SizeService]
    })
], SizeModule);
//# sourceMappingURL=size.module.js.map