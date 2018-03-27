const express = require('express')
const path = require('path')
const mongo = require('mongodb')
const keys = require('../config/keys')
const re =/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/g

module.exports = (app, db) => {


    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../public', 'index.html'))
    })
    app.get('/*', async (req, res, next)=>{
        const re2 = /^new\//g
        if(re2.test(req.params[0])){
            return next()
        }
        const abbrev = Number(req.params[0])
        //find a match through mongo and redirect, client.close()
        const match = await db.collection('link').findOne({ shortURL: abbrev })
        if(match.length === 0){return res.send({error: '404 - no match found'})}
        res.redirect(match.originalURL)
    })
}