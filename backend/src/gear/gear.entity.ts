import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity()
export class Gear {

 @PrimaryGeneratedColumn({
    type: 'bigint',
    unsigned: true,
 })
  id: number;

  @Column({
    nullable: false,
    type: 'varchar', 
    length: 255,
  })
  productName: string;

  @Column({ 
    nullable: true,
    type: 'decimal', 
    precision: 8, 
    scale: 2,
    default: 0.00,
    unsigned: true,
  })
  price: number;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 100,
    default: 'none',
  })
  category: string;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 100,
    default: 'none',
  })
  brand: string;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 25,
  })
  condition: string;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 255,
    default: '',
  })
  city: string;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 25,
    default: '',
  })
  zip: string;

  @Column({
    nullable: true,
    type: 'text',
  })
  description: string;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 255,
  })
  email: string;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 25,
  })
  phone: string;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 255,
  })
  imageFolderUrl: string;

  @CreateDateColumn()
  createdAt: Date;
}