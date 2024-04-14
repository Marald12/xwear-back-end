import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Size } from './size.model'
import { Model } from 'mongoose'
import { SizeDto } from './size.dto'

@Injectable()
export class SizeService {
	constructor(
		@InjectModel(Size.name) private readonly sizeModel: Model<Size>
	) {}

	async create(dto: SizeDto) {
		return this.sizeModel.create({
			...dto
		})
	}

	async findAll() {
		return await this.sizeModel.find().exec()
	}

	async findOne(id: string) {
		const size = await this.sizeModel.findById(id).populate('products').exec()
		if (!size) throw new NotFoundException('Размер не найдена')

		return size
	}

	async findBySize(count: number) {
		const size = await this.sizeModel
			.findOne({ size: count })
			.populate('products')
			.exec()
		if (!size) throw new NotFoundException('Размер не найдена')

		return size
	}

	async findManyBySize(sizes: number[]) {
		let nums: Size[] = []
		for (const key in sizes) {
			const size = await this.findBySize(sizes[key])

			nums.push(size)
		}

		return nums
	}
}
