const contentfulManagement = require('contentful-management')

module.exports = function() {
  const client = contentfulManagement.createClient({
    accessToken: '',
  })
  
  return client.getSpace('')
    .then((space) => space.getEnvironment('master'))
}

