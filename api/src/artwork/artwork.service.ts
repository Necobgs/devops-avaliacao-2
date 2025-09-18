import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateArtworkDto } from './dto/create-artwork.dto';
import { UpdateArtworkDto } from './dto/update-artwork.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ArtworkEntity } from './entities/artwork.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArtworkService {
  constructor(
    @InjectRepository(ArtworkEntity)
    private readonly artworkRepository: Repository<ArtworkEntity>,
  ) {}

  async findAll() {
    const artworks = await this.artworkRepository.find();
    return artworks;
  }

  async findOne(id: number) {
    const artwork = await this.artworkRepository.findOne({
      where: {
        id,
      },
    });

    if (!artwork)
      throw new NotFoundException('Obra de arte não encontrada!');

    return artwork;
  }

  async create(createArtworkDto: CreateArtworkDto) {
    const newArtwork = {
      ...createArtworkDto,
    };

    const artwork =
      await this.artworkRepository.create(newArtwork);

    return this.artworkRepository.save(artwork);
  }

  async update(id: number, updateArtworkDto: UpdateArtworkDto) {
    const artwork = await this.findOne(id);

    const updatedArtwork = this.artworkRepository.merge(
      artwork,
      updateArtworkDto,
    );

    return this.artworkRepository.save(updatedArtwork);
  }

  async remove(id: number) {
    const artwork = await this.findOne(id);

    return await this.artworkRepository.remove(artwork);
  }
}
