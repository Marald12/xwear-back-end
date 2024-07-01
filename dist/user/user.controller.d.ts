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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { RestoreUserDto } from './dto/restore-user.dto';
import { UpdatePasswordFromTokenDto } from './dto/update-password-from-token.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, import("./user.model").User> & import("./user.model").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<Omit<import("mongoose").Document<unknown, {}, import("./user.model").User> & import("./user.model").User & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    getProfile(user: any): Promise<import("mongoose").Document<unknown, {}, import("./user.model").User> & import("./user.model").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./user.model").User> & import("./user.model").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("mongoose").Document<unknown, {}, import("./user.model").User> & import("./user.model").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addAndRemoveLikeProduct(id: string, user: any): Promise<import("mongoose").Document<unknown, {}, import("./user.model").User> & import("./user.model").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updatePassword(user: any, dto: UpdatePasswordDto): Promise<string>;
    restorePassword(dto: RestoreUserDto): Promise<import("mongoose").Document<unknown, {}, import("../token/token.model").Token> & import("../token/token.model").Token & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updatePasswordFromToken(dto: UpdatePasswordFromTokenDto): Promise<string>;
}
