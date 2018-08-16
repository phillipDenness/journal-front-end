var assert = require('assert');
var service = require('../app/service');

describe('service.getResources()', function () {
    it('should return a valid json string', function () {
        return service.getResources(function(json) {
            console.log(json);
            assert.equal("", json);
        });
    });
  });