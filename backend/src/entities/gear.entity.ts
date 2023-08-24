import { ImgUrl } from "src/entities/ImgUrl.entity";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToOne, JoinColumn } from "typeorm";

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
    default: 'N/A',
  })
  category: string;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 100,
    default: 'N/A',
  })
  brand: string;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 25,
    default: 'N/A',
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
    default: '',
  })
  email: string;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 25,
    default: '',
  })
  phone: string;

  @OneToOne(() => ImgUrl)
  @JoinColumn()
  imgFolderUrl: ImgUrl;

  @CreateDateColumn()
  createdAt: Date;
}