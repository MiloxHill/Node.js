import mysql from "promise-mysql"; /* Gestor de base de datos  */
import config from "../config.js";

const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
});

const getConnection = ()=>{
    console.log(connection);
    return connection; 
}

export default getConnection;

/* Configuracion de la base de datos */