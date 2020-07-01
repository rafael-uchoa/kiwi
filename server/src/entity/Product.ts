import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import { validateOrReject, IsString, IsInt, IsDate } from 'class-validator';

@Entity()
class Product extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text', { nullable: false })
  @IsString()
  name: string;

  @Column('text', { nullable: false })
  @IsString()
  category: string;

  @Column('integer', { nullable: false })
  @IsInt()
  price: number;

  @CreateDateColumn()
  @IsDate()
  created_at: Date;

  @UpdateDateColumn()
  @IsDate()
  updated_at: Date;

  @BeforeInsert()
  @BeforeUpdate()
  private validate() {
    return validateOrReject(this);
  }
}

export default Product;
