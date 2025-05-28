// backend/controllers/agendamentoController.js
const Agendamento = require('../models/Agendamento');

exports.criarAgendamento = (req, res) => {
  const dados = req.body;

  Agendamento.criar(dados, (err, result) => {
    if (err) {
      console.error('Erro ao agendar:', err);
      res.status(500).json({ erro: 'Erro ao salvar agendamento' });
    } else {
      res.status(201).json({ mensagem: 'Agendamento salvo com sucesso!' });
    }
  });
};
