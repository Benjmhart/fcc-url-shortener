const express = require('express')
const mongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')
const keys = require('./config/keys')
const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.json())
mongoClient.connect(keys.mongoURL, (err, client) => {
    if(err){console.log(err)}
    console.log('connected to mongodb!')
    
    require('./routes/root')(app, client)
    require('./routes/new')(app, client)
})
app.listen(process.env.PORT || 5000)