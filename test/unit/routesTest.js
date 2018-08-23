const expect = require('chai').expect
const request = require('request')
const utils = require('../utils')
const sinon = require('sinon')
const movies = require('../fixtures/createResourceResponse.json');

describe('when stubbed', () => {

    beforeEach(() => {
        this.get = sinon.stub(request, 'get');
        this.post = sinon.stub(request, 'post');
      });
      
      afterEach(() => {
        request.get.restore();
        request.post.restore();
      });

    describe('POST /api/v1/movies', () => {
        it('should return the movie that was added', (done) => {
          const options = {
            body: {
              name: 'Titanic',
              genre: 'Drama',
              rating: 8,
              explicit: true
            },
            json: true,
            url: `${utils.base}/api/v1/movies`
          };
          const obj = movies.add.success;
          this.post.yields(null, obj.res, JSON.stringify(obj.body));
          request.post(options, (err, res, body) => {
            expect(res.statusCode).equal(201);
            expect(res.headers['content-type']).contain('application/json');
            body = JSON.parse(body);
            expect(body.status).equal('success');
            expect(body.data[0]).include.keys(
              'id', 'name', 'genre', 'rating', 'explicit'
            );
            expect(body.data[0].name).equal('Titanic');
            done();
          });
        });
      });

})