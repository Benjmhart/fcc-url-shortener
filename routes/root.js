const express = require('express')
const path = require('path')
const mongo = require('mongodb')
const keys = require('../config/keys')
const re =/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/g

module.exports = (app, client) => {

    const db = client.db('urls')

    app.get('/', (req, res) => {
        console.log('getting a request at root')
        res.sendFile(path.resolve(__dirname, '../public', 'index.html'))
    })
    app.get('/*', async (req, res, next)=>{
        console.log('getting a request at /* of ' + req.params[0])
        const re2 = /^new\//g
        if(re2.test(req.params[0])){
            console.log('passing to new handler')
            return next()
        }
        const abbrev = Number(req.params[0])
        console.log(`trying to fetch original url for ${abbrev}`)
        //find a match through mongo and redirect, client.close()
        const match = await db.collection('link').findOne({ shortURL: abbrev })
        console.log( match)
        if(match.length === 0){return res.send({error: '404 - no match found'})}
        res.redirect(match.originalURL)
    })
}