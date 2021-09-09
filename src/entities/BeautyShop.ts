import {
	Entity,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	PrimaryGeneratedColumn,
	BaseEntity
} from 'typeorm';

@Entity('tbl_beauty_shop')
export class BeautyShop extends BaseEntity{
	
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	introduction_content: string;

	@Column()
	is_active:boolean;

	BeautyShop: BeautyShop[];

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}