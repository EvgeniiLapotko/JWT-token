import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import router from './router';

dotenv.config();

const app = express();

const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Hello');
});

const start = async () => {
  try {
    // await mongoose.connect(DBurl)
    app.listen(PORT, () => {
      console.log(`Server run --port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
