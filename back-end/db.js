import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const uri = process.env.uri
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });