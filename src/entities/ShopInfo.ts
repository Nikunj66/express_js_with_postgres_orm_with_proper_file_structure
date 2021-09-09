import {
	Entity,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	PrimaryGeneratedColumn,
	BaseEntity,
    ManyToOne,
    JoinTable
} from 'typeorm';

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

    @ManyToOne((type) => ShopInfo, {
		cascade: true,
	})
	@JoinTable({
		name: 'tbl_beauty_shop',
		joinColumn: {
			name: 'shop_info',
			referencedColumnName: 'id',
		},
		inverseJoinColumn: {
			name: 'beauty_shop',
			referencedColumnName: 'id',
		},
	})

	ShopInfo: ShopInfo[];

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}