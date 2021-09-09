import { createConnection } from "typeorm";
import { User } from "./entities/User";
import { router } from './routes/user.router';
import express from "express";
const app = express();
export const main = async () => {
	try {
		await createConnection({
			type: 'postgres',
			host: 'localhost',
			port: 5432,
			username: 'postgres',
			password: 'root',
			database: 'dbUser',
			entities: [User],
			synchronize: true,
		});
		console.log('Connected to Postgres');		
	} catch (error) {
		console.error(error);
		throw new Error('Unable to connect to db');
	}
};