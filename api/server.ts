import { config, DBConfig } from './config/config';
import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import itemsController from './controllers/items_controllers';


dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.options('/items/new', (req: Request, res: Response) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.sendStatus(200);
});

// Controllers
app.use('/items', itemsController);
app.use('/items/new', itemsController);

// Example usage
const developmentConfig: DBConfig = config.development;

// Now you can use developmentConfig to initialize your database connection or any other relevant operations.

app.listen(process.env.PORT, () => {
    console.log(`Server has started on port ${process.env.PORT}`);
});
