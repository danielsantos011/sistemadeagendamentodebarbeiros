// backend/config/db.js
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // coloque a sua senha, se tiver
  database: 'barbearia'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('✅ Conectado ao banco de dados MySQL!');
});

module.exports = connection;
