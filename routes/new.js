const express = require('express')
const path = require('path')
const mongo = require('mongodb')
const keys = require('../config/keys')
const re =/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/

module.exports = (app, db) => {



    app.get('/new/*', async (req, res) => {
        console.log(req.params[0])
        const url = req.params[0]
        console.log(`attempting to create a new link with url: ${url}`)
        if(!re.test(url)){ return res.send({ error: 'url is invalid'})}
        const searchResults = await db.collection('link').find({ originalURL: url}).toArray()
        if(searchResults.length > 0){
        //if we find a previous match, respond with it
                const { originalURL, shortURL } = searchResults[0]
                const redirect = `${keys.baseURL}${shortURL}`
                console.log('redirect: '+ redirect)
            res.send({ originalURL, shortURL: redirect})
        } else{
                
            //if there is no match, insert a new link and respond with it
            //client.close()
            const docs = await db.collection('link').insertOne({ originalURL: url, shortURL: await db.collection('link').count() })                       
            const { originalURL, shortURL } = docs.ops[0]
            const redirect = `${keys.baseURL}${shortURL}`
            console.log('redirect: '+ redirect)
            res.send({ originalURL, shortURL: redirect })

            }
        })

}
