const express = require('express')

const bodyParser = require('body-parser')

const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.json())

require('./routes/root')(app)
require('./routes/new')(app)

app.listen(process.env.PORT || 5000)