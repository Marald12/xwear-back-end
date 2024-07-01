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
import { HydratedDocument } from 'mongoose';
import { Product } from 'src/product/product.model';
import * as mongoose from 'mongoose';
import { Category } from 'src/category/category.model';
export type ProductCategoryDocument = HydratedDocument<ProductCategory>;
export declare class ProductCategory {
    title: string;
    category: Category;
    products: Product[];
}
export declare const ProductCategorySchema: mongoose.Schema<ProductCategory, mongoose.Model<ProductCategory, any, any, any, mongoose.Document<unknown, any, ProductCategory> & ProductCategory & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ProductCategory, mongoose.Document<unknown, {}, mongoose.FlatRecord<ProductCategory>> & mongoose.FlatRecord<ProductCategory> & {
    _id: mongoose.Types.ObjectId;
}>;
