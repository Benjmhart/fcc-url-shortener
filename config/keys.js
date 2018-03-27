const mongoURL = (process.env.NODE_ENV === 'production') ? process.env.mongoURL : 'mongodb://localhost:27017/urls'
const baseURL = (process.env.NODE_ENV === 'production') ? 'https://fcc-url-shortener-bhart.herokuapp.com/' : 'http://localhost:5000/'
module.exports = { mongoURL, baseURL }