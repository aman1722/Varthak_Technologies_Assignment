import express, { Request, Response } from 'express';

import dotenv from 'dotenv';
import { connectToDatabase } from './config/db';
import authRouter from './routes/auth.routes';
import { authenticateToken } from './middlewares/auth.middleawre';
import bookRouter from './routes/book.routes';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());


// MongoDB Connection
connectToDatabase();



// Default route
app.get('/', (req: Request, res: Response) => {
  res.send('Library App API');
});

app.use('/auth', authRouter);
app.use(authenticateToken);
app.use('/books', bookRouter);
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
