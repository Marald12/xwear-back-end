import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { ModelEntity } from './model.model'
import { Model } from 'mongoose'
import { ModelDto } from './model.dto'
import { BrandService } from 'src/brand/brand.service'

@Injectable()
export class ModelService {
	constructor(
		@InjectModel(ModelEntity.name)
		private readonly modelModel: Model<ModelEntity>,
		private readonly brandService: BrandService
	) {}

	async create(dto: ModelDto) {
		const brand = await this.brandService.findOne(dto.brandId)
		const model = await this.modelModel.create({
			title: dto.title,
			brand: dto.brandId
		})

		await brand.updateOne({
			$push: {
				models: model._id
			}
		})

		return model
	}

	async findAll() {
		return this.modelModel.find().exec()
	}

	async findOne(id: string) {
		const model = (await this.modelModel.findById(id)).populate('brand')
		if (!model) throw new NotFoundException('Модель не найдена')

		return model
	}
}
