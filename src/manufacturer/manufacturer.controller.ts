import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { ManufacturerService } from './manufacturer.service';
import { CreateManufacturerDto } from './dto/create-manufacturer.dto';
import { UpdateManufacturerDto } from './dto/update-manufacturer.dto';

@ApiTags('Manufacturer')
@Controller('manufacturer')
export class ManufacturerController {
  constructor(private readonly manufacturerService: ManufacturerService) {}

  @Get()
  async findAll() {
    return await this.manufacturerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.manufacturerService.findOne(id);
  }

  @Post()
  async create(@Body() createManufacturerDto: CreateManufacturerDto) {
    return await this.manufacturerService.create(createManufacturerDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateManufacturerDto: UpdateManufacturerDto,
  ) {
    return await this.manufacturerService.update(id, updateManufacturerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.manufacturerService.remove(id);
  }
}
