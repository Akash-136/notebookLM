import express from 'express';
import connectDB from './src/config/db.js';
import dotenv from 'dotenv';
dotenv.config();
import userRoutes from './src/routes/users/userRoutes.js';
import cors from 'cors';


const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);

await connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

