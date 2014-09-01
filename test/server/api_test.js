var expect = require('chai').expect
  , request = require('supertest')
  , app = require('../../src/server/app')


describe("Routes", function() {

  describe("GET /", function () {
    it("returns package name and version", function(done) {
      request(app)
      .get('/')
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
        expect(res.body.name).to.eq('boogle')
        expect(res.body.version).to.eq('1.0.0')
        done()
      });
    });
  })
})
