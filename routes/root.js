const express = require('express')
const path = require('path')
const mongo = require('mongodb')

}
module.exports = app => {
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../public', 'index.html'))
    })
    app.get('/:url', (req, res) => {
        res.send('hello!')
        res.end()
    })
}