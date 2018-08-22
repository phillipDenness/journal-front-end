const expect = require('chai').expect
const request = require('request')
const querystring = require('querystring');
const utils = require('../utils')

describe('POST /resources/create' , function() {
    const testForm = {
        name: 'Spring boot 7',
        url: 'http://g.com',
        languagename: 'Java',
        frameworkname: 'Spring'
    }

    after(() => {
        utils.deleteResource(testForm.name)
    })

    it('should return a created resource', (done) => {
        request({
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            uri: `${utils.base}/resources/create`,
            method: 'POST',
            body: querystring.stringify(testForm)
          }, (err, res, body) => {
                expect(res.statusCode).to.equal(200)
                let returnedResource = JSON.parse(body)
                expect(returnedResource.name).to.equal(testForm.name)
                done()
        })
    })

    it('should return a error page when trying to create resource with same name', (done) => {
        request({
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            uri: `${utils.base}/resources/create`,
            method: 'POST',
            body: querystring.stringify(testForm)
          }, (err, res, body) => {
                expect(res.statusCode).to.equal(500)
                done()
        })
    })
})