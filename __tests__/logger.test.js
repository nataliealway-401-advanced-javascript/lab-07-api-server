'use strict';

const loggerMiddleware = require('../middleware/logger.js');

describe('logger middleware testing', () => {
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn(); //spy on the next method;
  
  beforeEach( () => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  
  afterEach( () => {
    consoleSpy.mockRestore();
  });
  
  it('properly logs output', ()=> {
    loggerMiddleware(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });
  
  it('properly moves to the next middleware', () => {
    loggerMiddleware(req, res, next);
    expect(next).toHaveBeenCalled();
  });
  
});