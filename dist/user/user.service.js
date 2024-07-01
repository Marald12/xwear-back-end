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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_model_1 = require("./user.model");
const mongoose_2 = require("mongoose");
const bcryptjs_1 = require("bcryptjs");
const product_service_1 = require("../product/product.service");
const mail_service_1 = require("../mail/mail.service");
const token_service_1 = require("../token/token.service");
const basket_service_1 = require("../basket/basket.service");
let UserService = class UserService {
    constructor(userModel, productService, mailService, tokenService, basketService) {
        this.userModel = userModel;
        this.productService = productService;
        this.mailService = mailService;
        this.tokenService = tokenService;
        this.basketService = basketService;
    }
    async create(dto) {
        const oldUser = await this.userModel.findOne({ email: dto.email }).exec();
        if (oldUser)
            throw new common_1.BadRequestException('Пользователь с таким E-mail уже существует');
        const salt = await (0, bcryptjs_1.genSalt)(10);
        const hashPassword = await (0, bcryptjs_1.hash)(dto.password, salt);
        const user = await this.userModel.create({
            email: dto.email,
            password: hashPassword
        });
        const basket = await this.basketService.create(user.id);
        await user.updateOne({
            basket: basket._id
        });
        return user;
    }
    async findByEmail(email) {
        const user = await this.userModel
            .findOne({ email })
            .select('password basket')
            .exec();
        if (!user)
            throw new common_1.NotFoundException('Пользователь с таким E-mail не найден');
        return user;
    }
    async findAll() {
        return await this.userModel.find().populate('likesProducts').exec();
    }
    async findOne(id) {
        const user = await this.userModel
            .findById(id)
            .populate(['likesProducts', 'basket'])
            .exec();
        if (!user)
            throw new common_1.NotFoundException('Пользователь не найден');
        return user;
    }
    async update(id, dto) {
        return await this.userModel.findByIdAndUpdate(id, {
            ...dto
        }, { new: true });
    }
    async addAndRemoveLikeProduct(userId, productId) {
        const user = await this.findOne(userId);
        const product = await this.productService.findOne(productId);
        let isProductInLikes = false;
        user.likesProducts.forEach(item => {
            if (item.id === product.id)
                return (isProductInLikes = true);
        });
        if (isProductInLikes)
            await user.updateOne({
                $pull: {
                    likesProducts: product._id
                }
            });
        if (!isProductInLikes)
            await user.updateOne({
                $push: {
                    likesProducts: product._id
                }
            });
        return await this.findOne(userId);
    }
    async updatePassword(userId, dto) {
        const user = await this.userModel.findById(userId).select('password');
        const isValidPassword = await (0, bcryptjs_1.compare)(dto.oldPassword, user.password);
        if (!isValidPassword)
            throw new common_1.BadRequestException('Неверный пароль');
        const salt = await (0, bcryptjs_1.genSalt)(10);
        const hashPassword = await (0, bcryptjs_1.hash)(dto.newPassword, salt);
        await user.updateOne({
            password: hashPassword
        });
        return 'Пароль успешно изменён';
    }
    async restorePassword(dto) {
        await this.findByEmail(dto.email);
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let randomToken = '';
        while (randomToken.length < 22)
            randomToken += alphabet[Math.floor(Math.random() * alphabet.length)];
        await this.mailService.sendConfirmMail({ ...dto }, randomToken);
        return await this.tokenService.create({
            token: randomToken,
            email: dto.email
        });
    }
    async updatePasswordFromToken(dto) {
        const token = await this.tokenService.findOne(dto.token);
        const user = await this.findByEmail(token.email);
        const salt = await (0, bcryptjs_1.genSalt)(10);
        const hashPassword = await (0, bcryptjs_1.hash)(dto.password, salt);
        await user.updateOne({
            password: hashPassword
        });
        await this.tokenService.findOneAndDelete(dto.token);
        return 'Пароль успешно изменён';
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_model_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        product_service_1.ProductService,
        mail_service_1.MailService,
        token_service_1.TokenService,
        basket_service_1.BasketService])
], UserService);
//# sourceMappingURL=user.service.js.map