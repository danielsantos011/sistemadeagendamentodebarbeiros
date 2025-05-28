// server.js
const express = require('express');
const app = express();
const cors = require('cors');
const agendamentoRoutes = require('./backend/routes/agendamentoRoutes');

app.use(cors());
app.use(express.json());
app.use('/api', agendamentoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
