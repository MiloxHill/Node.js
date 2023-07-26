import {config} from "dotenv";

config();

export default {
    host: process.env.HOST,
    database: process.env.DABATASE,
    user: process.env.USER,
    password: process.env.PASSWORD
}