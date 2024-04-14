import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Category } from './category.model'
import { CategoryDto } from './category.dto'

@Injectable()
export class CategoryService {
	constructor(
		@InjectModel(Category.name) private readonly categoryModel: Model<Category>
	) {}

	async create(dto: CategoryDto) {
		return await this.categoryModel.create({
			...dto
		})
	}

	async findAll() {
		return await this.categoryModel.find().exec()
	}

	async findOne(id: string) {
		const category = await this.categoryModel
			.findById(id)
			.populate(['products', 'categories'])
			.exec()
		if (!category) throw new NotFoundException('Категория не найдена')

		return category
	}
}
