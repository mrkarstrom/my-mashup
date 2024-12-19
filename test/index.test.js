import request from 'supertest';
import app from '../index.js';

describe('Testing the root path', () => {
  it('should return 200', async () => {
    const res = await request(app).get('/');
    expect(res.headers['content-type']).toEqual('text/html; charset=utf-8');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('<h1>Home</h1>');
  });
});
