const express = require('express')
const path = require('path')
const mongo = require('mongodb')

const re =/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/g

module.exports = app => {
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../public', 'index.html'))
    })
    app.get('/:abbrev', (req, res)=>{
        const { abbrev } = req.params.abbrev
        console.log(`trying to fetch original url for ${abbrev}`)
        res.end()
    })
}