import express from 'express';
import { main } from './db';
import { beautyShop } from './routes/beautyShop.router';
const app = express();

app.use(express.json());
app.use("/api/beautyshop",beautyShop);

app.listen(3000, () => {
	console.log('Now running on port 3000');
	main();
});