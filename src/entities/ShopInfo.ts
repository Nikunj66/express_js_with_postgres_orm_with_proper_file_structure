import {
	Entity,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	PrimaryGeneratedColumn,
	BaseEntity,
    ManyToOne,
	JoinColumn
} from 'typeorm';
import { BeautyShop } from './BeautyShop';

@Entity('tbl_shop_info')
export class ShopInfo extends BaseEntity{
	
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	address: string;

	@Column()
	contact_no: string;

    @Column()
	email: string;

    @Column()
	image: string;

    @Column()
	latitude: string;

    @Column()
	longitude: string;

    @Column()
	business_hour: number;

    @Column()
	company_registered_no: string;

    @Column()
	zip_code: number;

	@Column()
	is_active:boolean;

    @ManyToOne(type => BeautyShop)
	@JoinColumn({
        name: "beauty_shop_id",
        referencedColumnName: "id"
    })
	beautyShop: BeautyShop;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

}