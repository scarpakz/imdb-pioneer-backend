import express from 'express';
import cors from 'cors';
import config from '../config';
import router from '../routes/route'

const app = express();

app.use(cors());
app.use(express.json());

//Routes
app.use('/api/v1/', router)

const server = app.listen(config.port, () => {
    console.log(`Server is live: ${config.hostUrl}`)
})

export default server;