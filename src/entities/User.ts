import {
	Entity,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	PrimaryGeneratedColumn,
	BaseEntity
} from 'typeorm';

@Entity('user')
export class User extends BaseEntity{
	
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	first_name: string;

	@Column()
	last_name: string;

	@Column()
	age:string;

	User: User[];

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}
