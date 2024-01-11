import { DataSource, DataSourceOptions } from "typeorm";
import entities from "src/index";
import 'dotenv/config'

export const dataSourceOptions: DataSourceOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: false,
    entities: entities,
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;