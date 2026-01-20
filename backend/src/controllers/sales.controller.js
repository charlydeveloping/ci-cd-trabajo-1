const salesService = require('../services/sales.service');
const pool = require('../db/pool');

const createSale = async (req, res) => {
  try {
    const { monto, descripcion } = req.body;
    
    const validation = salesService.validateSale(monto, descripcion);
    if (!validation.valid) {
      return res.status(400).json({ error: validation.error });
    }

    const result = await pool.query(
      'INSERT INTO sales (monto, descripcion) VALUES ($1, $2) RETURNING *',
      [monto, descripcion]
    );
    
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error creating sale' });
  }
};

const getSales = async (_req, res) => {
  try {
    const result = await pool.query('SELECT * FROM sales ORDER BY id DESC');
    const total = salesService.calculateTotal(result.rows);
    res.json({ sales: result.rows, total });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching sales' });
  }
};

module.exports = { createSale, getSales };
