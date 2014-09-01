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

  describe("POST /index", function () {
    it("returns 204 no content with content-type json", function(done) {
      request(app)
      .post('/index')
      .expect(204)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) throw err;
        expect(res.body).to.deep.eq({});
        done()
      })
    });
  })

  describe("GET /search?query=Elementary,%20dear%20Watson", function () {
    it("returns 200 ok with content-type json and search results", function(done) {
      request(app)
      .post('/search')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) throw err;
        expect(res.body).to.deep.eq({
          "matches": [{
            "pageId": 300,
            "score": 3
          },{
            "pageId": 12,
            "score": 1
          }]
        });
        done()
      })
    });
  })
})
