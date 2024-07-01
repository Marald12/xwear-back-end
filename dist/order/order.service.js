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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const order_model_1 = require("./order.model");
const mongoose_2 = require("mongoose");
const basket_service_1 = require("../basket/basket.service");
const user_service_1 = require("../user/user.service");
let OrderService = class OrderService {
    constructor(orderModel, basketService, userService) {
        this.orderModel = orderModel;
        this.basketService = basketService;
        this.userService = userService;
    }
    async create(userId, dto) {
        const user = await this.userService.findOne(userId);
        const basket = await this.basketService.findOne(user.basket.id);
        const order = await this.orderModel.create({
            ...dto,
            user: user._id,
            items: basket.items
        });
        await user.updateOne({
            $push: {
                orders: order._id
            }
        });
        return order;
    }
    async findAll() {
        return await this.orderModel.find().populate(['user', 'items']).exec();
    }
    async findOne(id) {
        return await this.orderModel.findById(id).populate(['user', 'items']).exec();
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(order_model_1.Order.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        basket_service_1.BasketService,
        user_service_1.UserService])
], OrderService);
//# sourceMappingURL=order.service.js.map