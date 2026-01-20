const { validateSale, calculateTotal } = require('../../src/services/sales.service');

describe('Sales Service', () => {
  describe('validateSale', () => {
    it('should return valid for correct data', () => {
      const result = validateSale(100, 'Test sale');
      expect(result.valid).toBe(true);
    });

    it('should reject missing monto', () => {
      const result = validateSale(undefined, 'Test');
      expect(result.valid).toBe(false);
      expect(result.error).toBe('Monto is required');
    });

    it('should reject negative monto', () => {
      const result = validateSale(-50, 'Test');
      expect(result.valid).toBe(false);
      expect(result.error).toBe('Monto must be a positive number');
    });

    it('should reject zero monto', () => {
      const result = validateSale(0, 'Test');
      expect(result.valid).toBe(false);
    });

    it('should reject missing descripcion', () => {
      const result = validateSale(100, '');
      expect(result.valid).toBe(false);
      expect(result.error).toBe('Descripcion is required');
    });
  });

  describe('calculateTotal', () => {
    it('should calculate total correctly', () => {
      const sales = [{ monto: 100 }, { monto: 200 }, { monto: 50 }];
      expect(calculateTotal(sales)).toBe(351);
    });

    it('should return 0 for empty array', () => {
      expect(calculateTotal([])).toBe(0);
    });

    it('should return 0 for non-array', () => {
      expect(calculateTotal(null)).toBe(0);
      expect(calculateTotal(undefined)).toBe(0);
    });

    it('should handle string montos', () => {
      const sales = [{ monto: '100' }, { monto: '50' }];
      expect(calculateTotal(sales)).toBe(150);
    });
  });
});
