import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';


// // tempo vídeo 3:09:00
mongoose.connect('mongodb://localhost:27017')
    .then(() => {
        const app = express();

        const port = 3002;

        app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
        app.use(express.json());

        app.use(router);

        app.listen(port, () => {
            console.log(`🚀 Server is running on http://localhost:${port}`);
        });
    })
    .catch(() => console.error('❌ Error when connecting to mongoDB instance'));


