import fs from 'fs';
import path from 'path';
import { Sequelize, DataTypes } from 'sequelize';
import { basename as _basename } from 'path';
import { env } from 'process';
import { Config } from '../config/config'; // Assuming your config file exports a Config interface
const basename = _basename(__filename);
const environment = env.NODE_ENV || 'development';
const config: Config = require(path.join(__dirname, '..', 'config', 'config.js'))[environment];
const db: Record<string, any> = {};

let sequelize: Sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

sequelize.authenticate().then(() => {
  console.log('Database connected to server');
}).catch((err: any) => {
  console.error('Unable to connect to database', err);
});

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.ts' && // Update to .ts extension
      !file.includes('.test.ts') // Update to .test.ts extension
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file)).default(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
