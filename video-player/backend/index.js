import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { error404 } from './middlewares/errors/error404.js';
import { createError } from './middlewares/errors/createError.js';
import { __dirname } from './globals.js';
import VideoRouter from './app/routes/video.js';
import { logger } from './middlewares/logger/logger.js';
import { connectToDB } from './db.js';

const app = express();

const PORT = process.env.PORT || 5000;
dotenv.config();

await connectToDB();

app.use(cors());
app.use(express.json())
app.use(logger);
app.use(express.static(path.join(__dirname, 'media')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "welcome.html"));
});

app.use('/api/video', VideoRouter);

/*
 * Handle 404 error
 */
app.all('*', (req, res, next) => {
    error404(req, res);
});

app.use(createError);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});