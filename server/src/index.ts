import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();
const port = 7777;

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(7777, () => console.log(`Server listening on port ${port}`));
