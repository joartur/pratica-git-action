import request from 'supertest';
import app from '../app';

describe('HelloWorldRouter', () => {
  describe('GET /hello-world', () => {
    it('should return 200 OK', async () => {
      const response = await request(app).get('/hello-world');

      expect(response.status).toBe(200);
      expect(response.body).toEqual({ text: 'Hello World 2!' });
    });
  });
});
