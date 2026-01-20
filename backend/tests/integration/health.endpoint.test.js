const request = require('supertest');
const app = require('../../src/app');
const pool = require('../../src/db/pool');

describe('Health Endpoint', () => {
  afterAll(async () => {
    await pool.end();
  });

  it('GET /api/health should return ok when DB is connected', async () => {
    const response = await request(app).get('/api/health');
    
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: 'ok',
      database: 'connected'
    });
  });
});
