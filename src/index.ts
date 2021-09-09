import express from 'express';
import { main } from './db';
import { router } from './routes/user.router';
const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, () => {
	console.log('Now running on port 3000');
	main();
});