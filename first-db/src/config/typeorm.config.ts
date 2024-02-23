import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Login } from "src/login/login.entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'Practice',
    entities: [Login],
    synchronize: true,
};