import express from 'express';
import cors from 'cors';

import jwt from 'jsonwebtoken';
import passport from 'passport';
import mongoose from 'mongoose';
import jwtStrategy from './config/jwt-config.js';
passport.use(jwtStrategy);
import dotenv from 'dotenv';
// import protectedRoutes from './routes/protected-content-routes.js'; // Import your protected routes
dotenv.config()
const app = express() // instantiate an Express object
// we will put some server logic here later...
app.use(passport.initialize());
const uri = process.env.uri
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });
    

app.use(express.json());
app.use(cors())
app.use('/public', express.static('public'));
// export the express app we created to make it available to other modules
export default app;
