module.exports = function (r) {
  r.route('/search')
  /*
   * # Endpoint to handle searching
   * GET /search?query=Elementary,%20dear%20Watson
   * - Request
   * Accept: application/json
   * 
   * - Response
   * HTTP/1.1 200 OK
   * Content-Type: application/json
   * 
   * {
   *   “matches”: [
   *     {
   *       “pageId”: 300,
   *       “score”: 3
   *     },
   *     {
   *       “pageId”: 12,
   *       “score”: 1
   *     }
   *   ]
   * }
   */
  .post(function (req, res, next) {
    // Insert Smarter Peoples' Logic
    res.set('Content-Type', 'application/json')
    res.status(200).end('ok')
  })
}
