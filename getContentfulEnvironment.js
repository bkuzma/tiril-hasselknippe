require('dotenv').config({ path: './.env.local'})
const contentfulManagement = require('contentful-management')

module.exports = function() {
  const client = contentfulManagement.createClient({
    accessToken: process.env.CONTENTFUL_CONTENT_MANAGEMENT_TOKEN,
  })
  
  return client.getSpace(process.env.CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment('master'))
}
