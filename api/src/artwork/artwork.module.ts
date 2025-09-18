import { Module } from '@nestjs/common';
import { ArtworkService } from './artwork.service';
import { ArtworkController } from './artwork.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtworkEntity } from './entities/artwork.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ArtworkEntity])],
  controllers: [ArtworkController],
  providers: [ArtworkService],
  exports: [ArtworkService],
})
export class ArtworkModule {}
