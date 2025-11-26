const request = require('supertest');
const { app, server } = require('./app');

describe('Express App Tests', () => {
  afterAll((done) => {
    server.close(done);
  });

  test('GET / should return Hello World message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'Hello World!' });
  });

  test('GET /health should return healthy status', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: 'healthy' });
  });
});