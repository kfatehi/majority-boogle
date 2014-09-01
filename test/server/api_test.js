var expect = require('chai').expect
  , request = require('supertest')
  , app = require('../../src/server/app')


describe("Routes", function() {

  describe("POST /index", function () {
    it("returns 204 no content with content-type json", function(done) {
      request(app)
      .post('/index')
      .expect(204)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) throw err;
        expect(res.body).to.deep.eq({});
        // Insert code that tests that the index actually worked,
        // otherwise conduct that test in a downstream module
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
        // This will fail. See comments in
        // src/server/routes/search_route.js
        // src/server/routes/index_route.js
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
