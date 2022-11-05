const jsonwebtoken = require("jsonwebtoken")

const authBearerMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  const [strategy, jwt] = authorization.split(" ");
  try {
    if (strategy.toLowerCase() !== "bearer") {
      throw new Error("Invalid strategy")
    }

    const payload = jsonwebtoken.verify(jwt, "secretjsonwebtoken")
    req.auth = payload;
    next();
  } catch (error) {
    res.status(401).json({ message: "You are not authenticated. Please log in again" });
    return;
  }

}

const isValidRole = (role) => (req, res, next) => {
  if (req.auth?.role === role) {
    
    next()
  } else {
    res.status(403).json({ message: "You are not authorized" })
  }
}

const isValidUser = (email) => async (req, res, next) => {
  email = req.params.email
  console.log(email)
  console.log(req.auth.email)
  if (req.auth?.email === email) {
    next()
  } else {
    res.status(403).json({ message: "You are not authorized" })
  }
}

module.exports = {
  authBearerMiddleware,
  isValidRole,
  isValidUser
};