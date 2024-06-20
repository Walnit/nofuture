const request = require('supertest');
const { app } = require('./server');

describe('API Endpoints', () => {
  it('responds with Hello World!', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Hello World!');
  });

  it('fetches events', async () => {
    const response = await request(app).get('/events');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});


