'use strict';

const DataModel = require('./memory-data-model');

class Categories extends DataModel {
  constructor() {
    super();
    this.schema = {
      id: { required: true },
      name: { required: true },
    };
  }
}

module.exports = Categories;