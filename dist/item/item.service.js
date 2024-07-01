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
exports.ItemService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const item_model_1 = require("./item.model");
const user_service_1 = require("../user/user.service");
const basket_service_1 = require("../basket/basket.service");
let ItemService = class ItemService {
    constructor(itemModel, userService, basketService) {
        this.itemModel = itemModel;
        this.userService = userService;
        this.basketService = basketService;
    }
    async addProduct(productId, userId) {
        const user = await this.userService.findOne(userId);
        const basket = await this.basketService.findOne(user.basket._id);
        let isProduct = false;
        for (const key in basket.items) {
            const item = await this.itemModel
                .findById(basket.items[key])
                .populate('product');
            if (item.product.id == productId) {
                isProduct = true;
                await item.updateOne({
                    count: (item.count += 1)
                });
                return item;
            }
        }
        if (!isProduct) {
            const item = await this.itemModel.create({
                basket: basket._id,
                count: 1,
                product: productId
            });
            await basket.updateOne({
                $push: {
                    items: item._id
                }
            });
            return item;
        }
    }
    async removeProduct(productId, userId) {
        const user = await this.userService.findOne(userId);
        const basket = await this.basketService.findOne(user.basket._id);
        for (const key in basket.items) {
            const item = await this.itemModel
                .findById(basket.items[key]._id)
                .populate('product');
            if (item.product.id == productId) {
                if (item.count == 1) {
                    await this.itemModel.findByIdAndDelete(item._id);
                    await basket.updateOne({
                        $pull: {
                            items: item._id
                        }
                    });
                    return 'Продукт успешно удалён';
                }
                await item.updateOne({
                    count: item.count - 1
                }, {
                    new: true
                });
                return await this.itemModel
                    .findById(basket.items[key]._id)
                    .populate('product');
            }
        }
    }
};
exports.ItemService = ItemService;
exports.ItemService = ItemService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(item_model_1.Item.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        user_service_1.UserService,
        basket_service_1.BasketService])
], ItemService);
//# sourceMappingURL=item.service.js.map