// This file contains all the basic configuration logic for the app server to work
import dotenv from 'dotenv';

type ServerConfigType = {
    PORT: number
}

type DbConfigType = {
    DB_HOST: string,
    DB_USER: string,
    DB_PASSWORD: string,
    DB_NAME: string
}

function loadEnv() {
    dotenv.config();
    console.log(`Environment variables loaded`);
}

loadEnv();

export const serverConfig: ServerConfigType = {
    PORT: Number(process.env.PORT) || 3001
};

export const dbConfig: DbConfigType = {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || 'root@123',
    DB_NAME: process.env.DB_NAME || 'airbnb_development'
};