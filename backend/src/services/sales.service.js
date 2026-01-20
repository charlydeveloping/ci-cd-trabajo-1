/**
 * Validates sale data
 * @param {number} monto - Sale amount
 * @param {string} descripcion - Sale description
 * @returns {{ valid: boolean, error?: string }}
 */
const validateSale = (monto, descripcion) => {
  if (monto === undefined || monto === null) {
    return { valid: false, error: 'Monto is required' };
  }
  
  if (typeof monto !== 'number' || monto <= 0) {
    return { valid: false, error: 'Monto must be a positive number' };
  }
  
  if (!descripcion || typeof descripcion !== 'string') {
    return { valid: false, error: 'Descripcion is required' };
  }
  
  return { valid: true };
};

/**
 * Calculates total from sales array
 * @param {Array<{ monto: number }>} sales - Array of sales
 * @returns {number} - Total amount
 */
const calculateTotal = (sales) => {
  if (!Array.isArray(sales)) {
    return 0;
  }
  return sales.reduce((sum, sale) => sum + (parseFloat(sale.monto) || 0), 0);
};

module.exports = { validateSale, calculateTotal };
