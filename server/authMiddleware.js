require('dotenv').config();
const jwt = require('jsonwebtoken');

const authorizeUser = function async(req, res, next) {
  const { authorization } = req.headers;
  const accessToken = authorization && authorization.split(' ')[1];
  try {
    if (accessToken) {
      const user = jwt.verify(accessToken, process.env.ACCESS_TOKEN_KEY);
      req.user = user;
    }
  } catch (err) {
    console.log(err);
    req.user = null;
  }
  next()
}

module.exports = { authorizeUser }
