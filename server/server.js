import session from 'express-session';
import dotenv from 'dotenv';
import cors from 'cors';
import app from './app.js';
import sequelizerStore from 'connect-session-sequelize';
import db from './config/database.js';

dotenv.config();
// const sessionStore = sequelizerStore(session.Store);

// const store = new sessionStore({
//   db: db,
// });

(async () => {
  await db.sync();
})();

// app.use(
//   session({
//     secret: process.env.SESS_SECRET,
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//       secure: 'auto',
//     },
//   })
// );
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  })
);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`app listening port ${port}`);
});
