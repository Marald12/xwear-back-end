import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Item } from './item.model'

@Injectable()
export class ItemService {
	constructor(
		@InjectModel(Item.name) private readonly itemModel: Model<Item>
	) {}
}
