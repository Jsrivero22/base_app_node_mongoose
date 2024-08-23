import dotenv from 'dotenv';

import env from 'env-var';

dotenv.config();

export const envs = {

    PORT        : env.get('PORT').required().asPortNumber(),

    DB_TYPE     : env.get('DB_TYPE').required().asString(),

    MONGODB_CNN : env.get('MONGODB_CNN').required().asString(),
    MONGODB_NAME: env.get('MONGODB_NAME').required().asString(),

    // MYSQL
    // MYSQL_HOST  : env.get('MYSQL_HOST').required().asString(),
    // MYSQL_USER  : env.get('MYSQL_USER').required().asString(),
    // MYSQL_PASSWORD  : env.get('MYSQL_PASSWORD').required().asString(),
    // MYSQL_DATABASE  : env.get('MYSQL_DATABASE').required().asString(),

    // POSTGRESQL
    // POSTGRES_HOST  : env.get('POSTGRES_HOST').required().asString(),
    // POSTGRES_USER  : env.get('POSTGRES_USER').required().asString(),
    // POSTGRES_PASSWORD  : env.get('POSTGRES_PASSWORD').required().asString(),
    // POSTGRES_DATABASE  : env.get('POSTGRES_DATABASE').required().asString(),
    // POSTGRES_PORT  : env.get('POSTGRES_PORT').required().asPortNumber() || 5432,
}