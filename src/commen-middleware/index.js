<<<<<<< HEAD
const jwt = require("jsonwebtoken");

exports.requireSignin = (req, res, next) => {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      const user = jwt.verify(token, 'Developerrules'); 
      req.user = user; 
    } else {
      return res.status(400).json({ message: "Authorization required" });
    }
    next();
    //jwt.decode()
  };


 
  exports.requireSigninAdmin = (req,res,next)=>{
    console.log(req.headers)
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      const user = jwt.verify(token, 'admin'); 
      console.log(user)
      req.user = user;  
    } else {
      return res.status(400).json({ message: "Authorization required" });    
    }
    next();
    //jwt.decode()
=======
const jwt = require("jsonwebtoken");

exports.requireSignin = (req, res, next) => {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      const user = jwt.verify(token, 'Developerrules'); 
      req.user = user; 
    } else {
      return res.status(400).json({ message: "Authorization required" });
    }
    next();
    //jwt.decode()
  };


 
  exports.requireSigninAdmin = (req,res,next)=>{
    console.log(req.headers)
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      const user = jwt.verify(token, 'admin'); 
      console.log(user)
      req.user = user;  
    } else {
      return res.status(400).json({ message: "Authorization required" });   
    }
    next();
    //jwt.decode()
>>>>>>> 326a07bec403b3587f4f1f5e6e2b481d85897661
  };