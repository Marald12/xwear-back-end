import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Basket} from "./basket.model";
import {Model} from "mongoose";

@Injectable()
export class BasketService {
    constructor(@InjectModel(Basket.name) private readonly basketModel: Model<Basket>) {
    }
}
