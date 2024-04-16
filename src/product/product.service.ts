import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Product } from './product.model'
import { Model } from 'mongoose'
import { SizeService } from 'src/size/size.service'
import { ModelService } from 'src/model/model.service'
import { BrandService } from 'src/brand/brand.service'
import { CategoryService } from 'src/category/category.service'
import { ProductCategoryService } from 'src/product-category/product-category.service'
import { ProductDto } from './product.dto'

@Injectable()
export class ProductService {
	constructor(
		@InjectModel(Product.name) private readonly productModel: Model<Product>,
		private readonly sizeService: SizeService,
		private readonly modelService: ModelService,
		private readonly brandService: BrandService,
		private readonly categoryService: CategoryService,
		private readonly productCategoryService: ProductCategoryService
	) {}

	async create(dto: ProductDto) {
		const sizes = await this.sizeService.findManyBySize(dto.sizes)
		const model = await this.modelService.findOne(dto.modelId)
		const brand = await this.brandService.findOne(dto.brandId)
		const category = await this.categoryService.findOne(dto.mainCategoryId)
		const productCategory = await this.productCategoryService.findOne(
			dto.categoryId
		)
		const product = await this.productModel.create({
			title: dto.title,
			price: dto.price,
			images: dto.images,
			brand: brand._id,
			maincategory: category._id,
			category: productCategory._id,
			model: model._id,
			sizes
		})

		for (const key in sizes) {
			const size = await this.sizeService.findBySize(sizes[key].size)
			await size.updateOne({
				$push: {
					products: product._id
				}
			})
		}

		await brand.updateOne({
			$push: {
				products: product._id
			}
		})

		await model.updateOne({
			$push: {
				products: product._id
			}
		})

		await category.updateOne({
			$push: {
				products: product._id
			}
		})

		await category.updateOne({
			$push: {
				products: product._id
			}
		})

		await productCategory.updateOne({
			$push: {
				products: product._id
			}
		})

		return product
	}

	async findAll(
		searchTerm?: string,
		size?: number,
		model?: string,
		brand?: string,
		category?: string,
		mainCategory?: string
	) {
		let searchOptions = {}

		if (searchTerm) {
			searchOptions = {
				title: {
					$regex: searchTerm
				}
			}
		}

		if (size) {
			const sizeModel = await this.sizeService.findBySize(size)

			searchOptions = {
				...searchOptions,
				sizes: sizeModel._id
			}
		}

		if (model) {
			searchOptions = {
				...searchOptions,
				model
			}
		}

		if (brand) {
			searchOptions = {
				...searchOptions,
				brand
			}
		}

		if (category) {
			searchOptions = {
				...searchOptions,
				category
			}
		}

		if (mainCategory) {
			searchOptions = {
				...searchOptions,
				maincategory: mainCategory
			}
		}

		return await this.productModel
			.find({
				...searchOptions
			})
			.populate(['sizes', 'brand', 'model', 'maincategory', 'category'])
			.exec()
	}

	async findOne(id: string) {
		const product = await this.productModel
			.findById(id)
			.populate(['sizes', 'brand', 'model', 'maincategory', 'category'])
			.exec()
		if (!product) throw new NotFoundException('Продукт не найден')

		return product
	}

	async delete(id: string) {
		const product = await this.findOne(id)
		//@ts-ignore
		const model = await this.modelService.findOne(product.model._id)
		//@ts-ignore
		const brand = await this.brandService.findOne(product.brand._id)
		const category = await this.categoryService.findOne(
			//@ts-ignore
			product.maincategory._id
		)
		const productCategory = await this.productCategoryService.findOne(
			//@ts-ignore
			product.category._id
		)

		for (const key in product.sizes) {
			const size = await this.sizeService.findBySize(product.sizes[key].size)
			await size.updateOne({
				$pull: {
					products: product._id
				}
			})
		}

		await model.updateOne({
			$pull: {
				products: product._id
			}
		})

		await brand.updateOne({
			$pull: {
				products: product._id
			}
		})

		await category.updateOne({
			$pull: {
				products: product._id
			}
		})

		await productCategory.updateOne({
			$pull: {
				products: product._id
			}
		})

		await this.productModel.findByIdAndDelete(id)

		return 'Продукт успешно удалён'
	}
}
