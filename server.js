var app = require(__dirname+'/src/server/app.js')
  , http = require('http').Server(app)
  , port = process.env.PORT || 3000

http.listen(port, '0.0.0.0');
console.log("listening on http://0.0.0.0:"+port);
