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
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { Product } from '../product/product.model';
import { Basket } from '../basket/basket.model';
export type ItemDocument = HydratedDocument<Item>;
export declare class Item {
    basket: Basket;
    count: number;
    product: Product;
}
export declare const ItemSchema: mongoose.Schema<Item, mongoose.Model<Item, any, any, any, mongoose.Document<unknown, any, Item> & Item & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Item, mongoose.Document<unknown, {}, mongoose.FlatRecord<Item>> & mongoose.FlatRecord<Item> & {
    _id: mongoose.Types.ObjectId;
}>;
