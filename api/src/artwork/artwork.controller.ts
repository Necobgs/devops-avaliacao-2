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
import { ArtworkService } from './artwork.service';
import { CreateArtworkDto } from './dto/create-artwork.dto';
import { UpdateArtworkDto } from './dto/update-artwork.dto';

@ApiTags('Artwork')
@Controller('artwork')
export class ArtworkController {
  constructor(private readonly artworkService: ArtworkService) {}

  @Get()
  async findAll() {
    return await this.artworkService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.artworkService.findOne(id);
  }

  @Post()
  async create(@Body() createArtworkDto: CreateArtworkDto) {
    return await this.artworkService.create(createArtworkDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateArtworkDto: UpdateArtworkDto,
  ) {
    return await this.artworkService.update(id, updateArtworkDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.artworkService.remove(id);
  }
}
