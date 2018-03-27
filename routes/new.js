const express = require('express')
const path = require('path')
const mongo = require('mongodb')

const re =/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/g

module.exports = app => {
    app.get('/new/:url', (req, res) => {
        const { url } = req.params 
        if(!re.test(url)){res.send({ error: 'url is invalid'})}
        console.log(`attempting to create a new link with url: ${url}`)
// db access

        res.send('hello!')
        res.end()
}