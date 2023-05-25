import * as dotenv from 'dotenv';
dotenv.config();

export const BASIC_AUTH = {
  USERNAME: process.env.BASIC_AUTH_USERNAME,
  PASSWORD: process.env.BASIC_AUTH_PASSWORD
}
