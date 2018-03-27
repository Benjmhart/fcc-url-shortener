// built for use with Quokka https://quokkajs.com/

const fetch = require('node-fetch')
const baseurl = `https://fcc-timestamp-bhart.herokuapp.com/`
const url1 = `${baseurl}December%2015,%202015`
const url2 = `${baseurl}1450137600`

const getstuff = async (url) => {
    const r = await fetch(url, {})
    const j = await r.json()
    return j
}

const response = getstuff(url1) 
response

const response2 = getstuff(url2)
response2
