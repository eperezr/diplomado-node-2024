import { Sequelize } from "sequelize";
import 'dotenv/config';

export const sequelize = new Sequelize(
    //nombre base de datos
    process.env.DB_DATABASE,
    //username
    process.env.DB_USER,
    //password
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT,
      logging: console.log(),  
     dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        }
      }
    }
);
