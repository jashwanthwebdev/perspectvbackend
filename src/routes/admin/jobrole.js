const express = require('express');
const jobrolesRoutes = express.Router();
const multer = require('multer');    
const { requireSigninAdmin } = require('../../commen-middleware/index'); 



const { addjobrole} = require('../../controller/admin/jobrole'); 
const { addselfassessment ,getallselfassessmentcategory, addselfassessmentquestions, editselfassessment, updateselfassessment} = require('../../controller/admin/selfassessment'); 
const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
      cb(null, path.join(path.dirname(__dirname), "uploads"));
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + "-" + file.originalname);   
    }, 
  });  
let upload = multer({ storage }); 
jobrolesRoutes.post('/addjobrole', upload.none(), addjobrole);    
  
jobrolesRoutes.post('/self/addselfassessmentquestions',requireSigninAdmin,upload.none(),addselfassessmentquestions);  
jobrolesRoutes.post('/addselfassessment',upload.none(),addselfassessment);   
jobrolesRoutes.get('/getallselfassessmentcategory',requireSigninAdmin,getallselfassessmentcategory)


jobrolesRoutes.get('/editselfassessment/:id', editselfassessment)   
jobrolesRoutes.put('/updateselfassessment/:id',upload.none(),updateselfassessment)  
module.exports = jobrolesRoutes;        