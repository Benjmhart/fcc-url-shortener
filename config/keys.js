const mongoURL = 'mongodb://Benjmhart:Radio123!@ds125479.mlab.com:25479/fcc-url-short-bhart'
const baseURL = (process.env.NODE_ENV === 'production') ? 'https://fcc-url-shortener-bhart.herokuapp.com/' : 'http://localhost:5000/'
module.exports = { mongoURL, baseURL }