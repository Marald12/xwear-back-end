/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import * as mongoose from 'mongoose';
import { BasketService } from '../basket/basket.service';
export declare class AuthService {
    private readonly jwtService;
    private readonly userService;
    private readonly basketService;
    constructor(jwtService: JwtService, userService: UserService, basketService: BasketService);
    register(dto: CreateUserDto): Promise<{
        user: mongoose.Document<unknown, {}, import("../user/user.model").User> & import("../user/user.model").User & {
            _id: mongoose.Types.ObjectId;
        };
        token: string;
    }>;
    login(dto: CreateUserDto): Promise<{
        user: mongoose.Document<unknown, {}, import("../user/user.model").User> & import("../user/user.model").User & {
            _id: mongoose.Types.ObjectId;
        };
        token: string;
    }>;
    private generateJwtToken;
}
