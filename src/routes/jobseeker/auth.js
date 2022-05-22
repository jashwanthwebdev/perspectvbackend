const express = require('express');
const routerJobseeker = express.Router();
const multer = require('multer');  
const {signup, sendotp, verifyaccount, signin, forgotpassword, updatePassword} = require('../../controller/jobseeker/auth');

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
      cb(null, path.join(path.dirname(__dirname), "uploads"));
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + "-" + file.originalname);  
    }, 
  });  
let upload = multer({ storage }); 

routerJobseeker.post('/signup',upload.none(), signup);
routerJobseeker.post('/sendotp', sendotp);
routerJobseeker.post('/verifyaccount', verifyaccount);  
routerJobseeker.post('/signin', signin);
routerJobseeker.post('/forgotpassword', forgotpassword);
routerJobseeker.post('/updatepassword', updatePassword);  

module.exports = routerJobseeker;    