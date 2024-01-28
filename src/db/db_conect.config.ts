import { Customer } from '../model/customer.model';
import { DataSource } from 'typeorm';
require('dotenv').config();


/**
 * @version 1.0.0
 * @author Oswaldo Tovar <OswaldoTovar32@gmail.com>
 * @link https://github.com/oswaldotovar32
 */
export const myDataSource = new DataSource({
    type: 'postgres',
    host: process.env.URL_DB,
    port: +process.env.PORT_DB,
    username: process.env.USERNAME_DB,
    password: process.env.PASS_DB,
    database: process.env.NAME_DB,
    entities: [Customer],
    logging: true,
    synchronize: false
});

export default myDataSource;