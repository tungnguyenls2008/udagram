import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';


export const sequelize = new Sequelize({
  'username': config.username,
  'password': config.password,
  'database': config.database,
  'host': config.host,
  //'host': 'cdr.cyapw1mcmmdj.us-east-1.rds.amazonaws.com',

  'dialect': config.dialect,
  // 'dialectOptions': {
  //   'ssl': {
  //     'require': true, // This will help. But you will see new error
  //     'rejectUnauthorized': false // This line will fix new error
  //   }
  // },
  'storage': ':memory:',
});
