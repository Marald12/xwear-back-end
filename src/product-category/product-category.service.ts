import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { ProductCategory } from './product-category.model'
import { Model } from 'mongoose'
import { ProductCategoryDto } from './product-category.dto'
import { CategoryService } from 'src/category/category.service'

@Injectable()
export class ProductCategoryService {
	constructor(
		@InjectModel(ProductCategory.name)
		private readonly productCategoryModel: Model<ProductCategory>,
		private readonly categoryService: CategoryService
	) {}

	async create(dto: ProductCategoryDto) {
		const category = await this.categoryService.findOne(dto.categoryId)
		const productCategory = await this.productCategoryModel.create({
			title: dto.title,
			category: dto.categoryId
		})

		await category.updateOne({
			$push: {
				categories: productCategory._id
			}
		})

		return productCategory
	}

	async findAll() {
		return await this.productCategoryModel.find().exec()
	}

	async findOne(id: string) {
		const productCategory = await await this.productCategoryModel
			.findById(id)
			.populate(['category', 'products'])
			.exec()
		if (!productCategory)
			throw new NotFoundException('Категория продукта не найдена')

		return productCategory
	}
}
