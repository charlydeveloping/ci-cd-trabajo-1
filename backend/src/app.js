const express = require('express');
const cors = require('cors');
const healthRoutes = require('./routes/health.routes');
const salesRoutes = require('./routes/sales.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/health', healthRoutes);
app.use('/api/sales', salesRoutes);

module.exports = app;

