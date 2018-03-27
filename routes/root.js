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
    app.get('/*', async (req, res)=>{
        console.log('getting a request at /*')
        const abbrev = Number(req.params[0])
        console.log(`trying to fetch original url for ${abbrev}`)
        //find a match through mongo and redirect, client.close()
        const match = await db.collection('link').findOne({ shortURL: abbrev })
        console.log( match)

        res.redirect(match.originalURL)
    })
}