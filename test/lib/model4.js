'use strict';

var repository = require('./repo');

module.exports = repository.Model.extend({
  soft: true,
  tableName: 'test4'
});
