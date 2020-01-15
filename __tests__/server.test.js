'use strict';

const { server } = require('../lib/server');
const supertest = require('supertest');
const mockRequest = supertest( server );


describe('Product route testing', async () => {

  it('Should respond with on invalid route with 404 error', async () => {
    try {
      let result = await mockRequest.get('/wrongTurn');
      expect(result.status).toEqual(404);
    }
    catch (error) {error;}
  });
  
  it('should respond properly on request to a good route', async () => {
    try {
      let result = await mockRequest.get('/products');
      expect(result.status).toBe(200);
    }
    catch (error) {error;}
  });
});