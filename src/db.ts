import { createConnection } from "typeorm";
import express from "express";
import { BeautyShop } from "./entities/BeautyShop";
import { ShopInfo } from "./entities/ShopInfo";
const app = express();
export const main = async () => {
	try {
		await createConnection({
			type: 'postgres',
			host: 'localhost',
			port: 5432,
			username: 'postgres',
			password: 'root',
			database: 'dbPrettyFox',
			entities: [BeautyShop,ShopInfo],
			synchronize: true,
		});
		console.log('Connected to Postgres');		
	} catch (error) {
		console.error(error);
		throw new Error('Unable to connect to db');
	}
};