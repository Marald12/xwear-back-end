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
import { Item } from '../item/item.model';
import { User } from '../user/user.model';
export type OrderDocument = HydratedDocument<Order>;
export declare class Order {
    companyName?: string;
    country: string;
    street: string;
    city: string;
    region: string;
    numberHouse: string;
    postcode: string;
    status: 'Отправка' | 'В обработке';
    user: User;
    items: Item[];
}
export declare const OrderSchema: mongoose.Schema<Order, mongoose.Model<Order, any, any, any, mongoose.Document<unknown, any, Order> & Order & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Order, mongoose.Document<unknown, {}, mongoose.FlatRecord<Order>> & mongoose.FlatRecord<Order> & {
    _id: mongoose.Types.ObjectId;
}>;
