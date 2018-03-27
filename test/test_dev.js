//built for use with Quokka https://quokkajs.com/

const fetch = require('node-fetch')
const baseurl = `http://localhost:5000/`
const url1 = `${baseurl}api`
// test cases:  new url,  old url, broken url

const getstuff = async (url) => {
    const r = await fetch(url, {})
    const j = await r.json()
    return j
}

const response = getstuff(url1) 
response
