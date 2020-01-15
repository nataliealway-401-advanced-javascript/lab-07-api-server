'use strict';

/**
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */

const logger = (req, res, next) => {
  console.log(req.path);
  console.log(req.requestTime);
  next();
};


module.exports = logger;