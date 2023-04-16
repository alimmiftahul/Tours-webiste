import express from 'express';
import helmet from 'helmet';

const app = express();

app.get('/', (req, res) => {
  res.status(200).render('base');
});
app.use('/api/v1/tours');
app.use('/api/v1/users');
app.use('/api/v1/reviews');

app.use(helmet());

module.exports = app;
