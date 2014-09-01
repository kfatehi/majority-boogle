var router = require('express').Router()
require('./index_route')(router)
require('./search_route')(router)
module.exports = router
