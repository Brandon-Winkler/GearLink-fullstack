import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
  ProductName: string;

  @Column({ 
    nullable: true,
    type: 'decimal', 
    precision: 8, 
    scale: 2,
    default: 0.00,
    unsigned: true,
  })
  Price: number;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 100,
    default: 'none',
  })
  Category: string;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 100,
    default: 'none',
  })
  Brand: string;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 25,
  })
  Condition: string;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 255,
    default: '',
  })
  City: string;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 25,
    default: '',
  })
  Zip: string;

  @Column({
    nullable: true,
    type: 'text',
  })
  Description: string;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 255,
  })
  Email: string;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 25,
  })
  Phone: string;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 255,
  })
  imageFolderUrl: string;

  @Column({
    nullable: false,
    type: 'date',
  })
  Date: string;
}