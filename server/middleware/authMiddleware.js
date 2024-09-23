const jwt = require("jsonwebtoken");
require("dotenv").config();

// MiddleWare Here we will need auth for now

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];


  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.log(err, "err===========================================");
      return res.status(401).json({ message: "Invalid token" });
    }
    console.log(
      decoded,
      "reached heeeeere==========================================="
    );

    req.user = decoded;
    console.log(req.user, "req.use333333333333333333333333");
    next();
    console.log(req.user.id, "req.use333333333333333333333333");
  });


};
module.exports = authenticate;
