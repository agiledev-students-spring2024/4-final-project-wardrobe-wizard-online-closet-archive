import express from 'express';
import cors from 'cors';
const app = express() // instantiate an Express object

// we will put some server logic here later...
app.use(express.json());
app.use(cors())
app.use('/public', express.static('public'));
// export the express app we created to make it available to other modules
export default app;
