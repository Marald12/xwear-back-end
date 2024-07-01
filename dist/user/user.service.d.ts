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
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.model';
import { Model } from 'mongoose';
import { ProductService } from 'src/product/product.service';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { RestoreUserDto } from './dto/restore-user.dto';
import { MailService } from '../mail/mail.service';
import { TokenService } from '../token/token.service';
import { UpdatePasswordFromTokenDto } from './dto/update-password-from-token.dto';
import { BasketService } from '../basket/basket.service';
export declare class UserService {
    private readonly userModel;
    private readonly productService;
    private readonly mailService;
    private readonly tokenService;
    private readonly basketService;
    constructor(userModel: Model<User>, productService: ProductService, mailService: MailService, tokenService: TokenService, basketService: BasketService);
    create(dto: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findByEmail(email: string): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<Omit<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, dto: UpdateUserDto): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addAndRemoveLikeProduct(userId: string, productId: string): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updatePassword(userId: string, dto: UpdatePasswordDto): Promise<string>;
    restorePassword(dto: RestoreUserDto): Promise<import("mongoose").Document<unknown, {}, import("../token/token.model").Token> & import("../token/token.model").Token & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updatePasswordFromToken(dto: UpdatePasswordFromTokenDto): Promise<string>;
}
