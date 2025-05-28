// backend/routes/agendamentoRoutes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/agendamentoController');

router.post('/agendar', controller.criarAgendamento);

module.exports = router;
