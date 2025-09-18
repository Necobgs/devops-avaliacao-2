import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'artwork' })
export class ArtworkEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'varchar', length: 255})
  artist: string;

  @Column({ type: 'integer'})
  year: number;

  @Column({ type: 'numeric'})
  price: number;

}
