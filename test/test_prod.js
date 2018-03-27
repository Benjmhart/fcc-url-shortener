//built for use with Quokka https://quokkajs.com/

const fetch = require('node-fetch')
const baseurl = `https://fcc-url-shortener-bhart.herokuapp.com/`
const url1 = `${baseurl}new/http://reddit.com/`
const url2 = `${baseurl}1`
// test cases:  new url,  old url, broken url

const getstuff = async (url) => {
    const r = await fetch(url)
    const j = await r.json()
    return j
}

const response = getstuff(url1) 
response //?

const response2 = getstuff(url2)//?