import express from 'express';
import cors from 'cors';
import config from '../config';

const app = express();
const routes = express.Router();

app.use(cors());
app.use(express.json());

//Routes
app.use('/api', routes)

const server = app.listen(config.port, () => {
    console.log(`Server is live: ${config.hostUrl}`)
})

export default server