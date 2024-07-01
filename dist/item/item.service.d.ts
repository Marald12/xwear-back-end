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
import { Model } from 'mongoose';
import { Item } from './item.model';
import { UserService } from '../user/user.service';
import { BasketService } from '../basket/basket.service';
export declare class ItemService {
    private readonly itemModel;
    private readonly userService;
    private readonly basketService;
    constructor(itemModel: Model<Item>, userService: UserService, basketService: BasketService);
    addProduct(productId: string, userId: string): Promise<import("mongoose").Document<unknown, {}, Item> & Item & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeProduct(productId: string, userId: string): Promise<(import("mongoose").Document<unknown, {}, Item> & Item & {
        _id: import("mongoose").Types.ObjectId;
    }) | "Продукт успешно удалён">;
}
