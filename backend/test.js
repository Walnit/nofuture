const request = require('supertest');
const { app, start, server } = require('./server');

beforeAll(async () => {
  start();
});

afterAll(async () => {
  await new Promise(resolve => server.close(resolve));
});

describe('API Endpoints', () => {
  it('GET / should return Hello World', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Hello World!');
  });

  it('GET /events should return events array', async () => {
    const res = await request(app).get('/events');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('GET /secure should require authentication', async () => {
    const res = await request(app).get('/secure');
    expect(res.statusCode).toBeGreaterThanOrEqual(400);
  });
});
