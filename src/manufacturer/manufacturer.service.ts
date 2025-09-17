import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateManufacturerDto } from './dto/create-manufacturer.dto';
import { UpdateManufacturerDto } from './dto/update-manufacturer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ManufacturerEntity } from './entities/manufacturer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ManufacturerService {
  constructor(
    @InjectRepository(ManufacturerEntity)
    private readonly manufacturerRepository: Repository<ManufacturerEntity>,
  ) {}

  async findAll() {
    const manufacturers = await this.manufacturerRepository.find();
    return manufacturers;
  }

  async findOne(id: number) {
    const manufacturer = await this.manufacturerRepository.findOne({
      where: {
        id,
      },
    });

    if (!manufacturer)
      throw new NotFoundException('Fabricante não encontrado!');

    return manufacturer;
  }

  async create(createManufacturerDto: CreateManufacturerDto) {
    const newManufacturer = {
      ...createManufacturerDto,
    };

    const manufacturer =
      await this.manufacturerRepository.create(newManufacturer);

    return this.manufacturerRepository.save(manufacturer);
  }

  async update(id: number, updateManufacturerDto: UpdateManufacturerDto) {
    const manufacturer = await this.findOne(id);

    const updatedManufacturer = this.manufacturerRepository.merge(
      manufacturer,
      updateManufacturerDto,
    );

    return this.manufacturerRepository.save(updatedManufacturer);
  }

  async remove(id: number) {
    const manufacturer = await this.findOne(id);

    return await this.manufacturerRepository.remove(manufacturer);
  }
}
