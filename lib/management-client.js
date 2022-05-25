require('dotenv').config()
const contentful = require('contentful-management');

const CONTENTFUL_MANAGEMENT_ACCESS_TOKEN = process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN;

const client = contentful.createClient({
    accessToken: CONTENTFUL_MANAGEMENT_ACCESS_TOKEN,
});

module.exports = client;
 

