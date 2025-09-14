import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import cookieParser from 'cookie-parser';
import indexRoutes from './routes/indexRoutes.js'
import assistantRoutes from './routes/assistantRoutes.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173', // or your frontend port
    credentials: true
})); 

app.use('/auth', authRoutes);
app.use('/assistant',assistantRoutes);
app.use('/indexRoutes',indexRoutes);
app.get('/',(req,res)=>{
    res.send('Server Testing Route')
})

connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})