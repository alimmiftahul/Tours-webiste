import { Sequelize } from 'sequelize';

const db = new Sequelize('tours', 'root', 'Alim123!', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;
