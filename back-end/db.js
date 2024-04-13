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

const username_password = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {collection: 'user'});

// const clothing_item = new mongoose.Schema({
//     //id, name, brand, type, color, notes, imgLink
// }, {collection: 'clothing'});


