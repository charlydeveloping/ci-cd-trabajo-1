import { describe, it, expect } from 'vitest';

describe('Sample Test', () => {
  it('should pass basic assertion', () => {
    expect(1 + 1).toBe(2);
  });

  it('should verify test environment is working', () => {
    expect(true).toBe(true);
  });

  it('should handle arrays correctly', () => {
    const items = [1, 2, 3];
    expect(items).toHaveLength(3);
    expect(items).toContain(2);
  });
});
