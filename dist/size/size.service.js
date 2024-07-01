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
exports.SizeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const size_model_1 = require("./size.model");
const mongoose_2 = require("mongoose");
let SizeService = class SizeService {
    constructor(sizeModel) {
        this.sizeModel = sizeModel;
    }
    async create(dto) {
        return this.sizeModel.create({
            ...dto
        });
    }
    async findAll() {
        return await this.sizeModel.find().exec();
    }
    async findOne(id) {
        const size = await this.sizeModel.findById(id).populate('products').exec();
        if (!size)
            throw new common_1.NotFoundException('Размер не найдена');
        return size;
    }
    async findBySize(count) {
        const size = await this.sizeModel
            .findOne({ size: count })
            .populate('products')
            .exec();
        if (!size)
            throw new common_1.NotFoundException('Размер не найдена');
        return size;
    }
    async findManyBySize(sizes) {
        let nums = [];
        for (const key in sizes) {
            const size = await this.findBySize(sizes[key]);
            nums.push(size);
        }
        return nums;
    }
};
exports.SizeService = SizeService;
exports.SizeService = SizeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(size_model_1.Size.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SizeService);
//# sourceMappingURL=size.service.js.map