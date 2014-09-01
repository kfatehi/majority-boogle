module.exports = function (r) {
  r.route('/index')
  /*
   * # Endpoint to handle indexing
   * POST /index
   * - Request
   * Content-Type: application/json
   * Accept: application/json
   * 
   * {
   *   “pageId”: 300,
   *   “content”: “Elementary, dear Watson”
   * }
   * 
   * - Response
   * HTTP/1.1 204 No Content
   * Content-type: application/json
   */
  .post(function (req, res, next) {
    res.status(200).end('ok')
  })
}
