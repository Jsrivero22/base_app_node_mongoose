import mongoose from 'mongoose';

import { envs } from "../config/envs.js";

export const dbConnection = async () => {

    try {

        await mongoose.connect(`${ envs.MONGODB_CNN }/${ envs.MONGODB_NAME }`);
        console.log('Database online');

    } catch (error) {

        console.log(error);
        throw new Error('Error Database connection');
    }
}
