const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

exports.authCheck = jwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: "https://kevin2106.eu.auth0.com/.well-known/jwks.json"
  }),
  audience: 'http://api.chibb-dashboard.nl',
  issuer: "https://kevin2106.eu.auth0.com/",
  algorithms: ['RS256']
});
