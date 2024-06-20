const request = require('supertest');
const { app, start, server } = require('./server');

beforeAll(async () => {
  start();
});

afterAll(async () => {
  await new Promise(resolve => server.close(resolve));
});

describe('GET /', () => {
  it('responds with Hello World!', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Hello World!');
  });
});
