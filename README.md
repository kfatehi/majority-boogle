This is a test given to me by Majority.co to determine my skill level. [Link to the test](https://docs.google.com/document/d/1gYlBsmrzLOd08OJuifO5UwOePKoEhwvBf3ppLPV_AbU/edit).

Having been a developer for a pretty long time, I've reached a point at which I know my limits.
This fact is reflected in the code in the form of failing tests and comments.
If this were a real project, the next steps would be to setup continuous integration and deployment while smarter people than myself continue to iterate and solve the core puzzle (a fast searching algo) in whatever way they think is best.

What follows is the test output.

Thank you,

Keyvan

```
❯❯❯ npm test 2>&1 | simple-stacktrace

> boogle@1.0.0 test
> mocha --recursive test



  Routes
    POST /index
      ✓ returns 204 no content with content-type json
    GET /search?query=Elementary,%20dear%20Watson
      1) returns 200 ok with content-type json and search results


  1 passing (37ms)
  1 failing

  1) Routes GET /search?query=Elementary,%20dear%20Watson returns 200 ok with content-type json and search results:

      Uncaught AssertionError: expected {} to deeply equal { Object (matches) }
      + expected - actual

      +{
      +  "matches": [
      +    {
      +      "pageId": 300
      +      "score": 3
      +    }
      +    {
      +      "pageId": 12
      +      "score": 1
      +    }
      +  ]
      +}
      -{}

      at Test.<anonymous> (/test/server/api_test.js:35:34)
      at Server.g (events.js:180:16)
      at Server.emit (events.js:92:17)
      at net.js:1276:10
      at process._tickCallback (node.js:419:13)



npm ERR! Test failed.  See above for more details.
npm ERR! not ok code 0
```
