import dotenv from 'dotenv';

import env from 'env-var';

dotenv.config();

export const envs = {

    PORT        : env.get('PORT').required().asPortNumber(),

    DB_TYPE     : env.get('DB_TYPE').required().asString(),

    MONGODB_CNN : env.get('MONGODB_CNN').required().asString(),
    MONGODB_NAME: env.get('MONGODB_NAME').required().asString(),

}