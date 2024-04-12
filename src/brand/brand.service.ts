import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Brand } from './brand.model'
import { Model } from 'mongoose'
import { BrandDto } from './brand.dto'

@Injectable()
export class BrandService {
	constructor(
		@InjectModel(Brand.name) private readonly brandModel: Model<Brand>
	) {}

	async create(dto: BrandDto) {
		return await this.brandModel.create({
			...dto
		})
	}

	async findAll() {
		return await this.brandModel.find().exec()
	}

	async findOne(id: string) {
		const brand = await this.brandModel.findById(id).populate('models').exec()
		if (!brand) throw new NotFoundException('Бренд не найден')

		return brand
	}
}
