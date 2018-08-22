const expect = require('chai').expect
const request = require('request')
const utils = require('./utils')
const sinon = require('sinon')
const movies = require('./fixtures/createResourceResponse.json');

describe('when stubbed', () => {

    beforeEach(() => {
        this.get = sinon.stub(request, 'get');
    })

    afterEach(() => {
        request.get.restore();
    });

    describe('GET /api/v1/movies', () => {
        it('should return all movies', (done) => {
            this.get.yields(
                null, movies.all.success.res, JSON.stringify(movies.all.success.body)
            );
            request.get(`${utils.base}/api/v1/movies`, (err, res, body) => {
                // there should be a 200 status code
                expect(res.statusCode).equal(200)
                done();
          });
        });
      });

})