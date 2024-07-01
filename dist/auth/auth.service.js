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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
const bcryptjs_1 = require("bcryptjs");
const basket_service_1 = require("../basket/basket.service");
let AuthService = class AuthService {
    constructor(jwtService, userService, basketService) {
        this.jwtService = jwtService;
        this.userService = userService;
        this.basketService = basketService;
    }
    async register(dto) {
        const user = await this.userService.create(dto);
        await this.basketService.create(user._id);
        return {
            user,
            token: await this.generateJwtToken(user._id)
        };
    }
    async login(dto) {
        const user = await this.userService.findByEmail(dto.email);
        const isValidPassword = await (0, bcryptjs_1.compare)(dto.password, user.password);
        if (!isValidPassword)
            throw new common_1.BadRequestException('Пароли не совпадают');
        return {
            user,
            token: await this.generateJwtToken(user._id)
        };
    }
    async generateJwtToken(_id) {
        return await this.jwtService.signAsync({ _id });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        user_service_1.UserService,
        basket_service_1.BasketService])
], AuthService);
//# sourceMappingURL=auth.service.js.map