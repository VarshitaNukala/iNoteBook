const jwt = require("jsonwebtoken");
const JSW_SECRET = "ThisIsASecret@Message";
const fetchuser = (req, res, next) => {
  //Get user from jwt and id to req object
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, JSW_SECRET);
    req.user = data.user;
  } catch (error) {
    res.status(401).send({ error: "please authenticate using a valid token" });
  }
  next();
};

module.exports = fetchuser;
