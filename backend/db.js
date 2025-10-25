<<<<<<< HEAD
const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

connection.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
    return;
  }
  console.log("✅ Conexión exitosa a la base de datos MySQL de Railway");
});

// Exportamos un objeto que contiene la conexión
// para que otros archivos puedan importarlo con 'require'
module.exports = { connection };
=======
const sql = require('mssql');
const dotenv = require('dotenv');
dotenv.config();

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};


const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('✅ Conectado a SQL Server con autenticación de Windows');
        return pool;
    })
    .catch(err => console.log('❌ DB Connection Error: ', err));

module.exports = {
    sql, poolPromise
};
>>>>>>> 0346e3e42a818f84aef0c4bd7942d71f6a15a2ad
