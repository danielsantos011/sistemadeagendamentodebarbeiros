// backend/models/Agendamento.js
const db = require('../config/db');

const Agendamento = {
  criar: (dados, callback) => {
    const sql = 'INSERT INTO agendamentos (nome, telefone, data, hora) VALUES (?, ?, ?, ?)';
    db.query(sql, [dados.nome, dados.telefone, dados.data, dados.hora], callback);
  }
};

module.exports = Agendamento;
