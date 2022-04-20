const express = require('express');
const routerJobposter = express.Router();
const multer = require('multer'); 
const {signup, sendotp, verifyaccount, signin, forgotpassword, updatePassword} = require('../../controller/jobposter/auth');

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
      cb(null, path.join(path.dirname(__dirname), "uploads"));
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + "-" + file.originalname);  
    }, 
  });  
let upload = multer({ storage }); 

routerJobposter.post('/signup',upload.none(), signup);
routerJobposter.post('/sendotp', sendotp);
routerJobposter.post('/verifyaccount', verifyaccount);
routerJobposter.post('/signin', signin);
routerJobposter.post('/forgotpassword', forgotpassword);
routerJobposter.post('/updatepassword', updatePassword);  

module.exports = routerJobposter;   