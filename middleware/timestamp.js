'use strict';

/**
 * @param  {} req
 * @param  {} res
 * @param  {} next
 */
const timestamp = (req, res, next) => {
  req.requestTime = Date.now().toString();
};



module.exports = timestamp;