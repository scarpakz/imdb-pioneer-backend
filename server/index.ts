import express from 'express';
import cors from 'cors';
import config from '../config';
import router from '../routes/route'
import mongoose from 'mongoose';


const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(config.databaseUrl)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Database connected'))

//Routes
app.use('/api/v1/', router)


const server = app.listen(config.port, () => {
    console.log(`Server is live: ${config.hostUrl}`)
})

export default server;