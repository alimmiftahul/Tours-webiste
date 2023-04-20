import express from 'express';
import helmet from 'helmet';
import tourRouter from './routes/tourRoutes.js';
import userRouter from './routes/userRoutes.js';

var app = express();

app.use(tourRouter);
app.use(userRouter);

export default app;
