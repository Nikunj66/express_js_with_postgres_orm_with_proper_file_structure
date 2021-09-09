import express from 'express';
import { main } from './db';
import { user } from './routes/user.router';
const app = express();

app.use(express.json());
app.use("/api/user",user);

app.listen(3000, () => {
	console.log('Now running on port 3000');
	main();
});