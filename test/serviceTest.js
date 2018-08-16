var expect = require('chai').expect;
var service = require('../service');

describe('service.getResources()', function () {
    it('should return a valid json string', function () {
        return service.getResources(function(json) {
            console.log(json);
            expect.equal("", json);
        });
    });
  });