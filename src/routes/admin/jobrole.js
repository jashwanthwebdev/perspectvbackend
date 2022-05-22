<<<<<<< HEAD
const express = require('express');
const req = require('express/lib/request');
const jobrolesRoutes = express.Router();
const multer = require('multer');    
const { requireSigninAdmin } = require('../../commen-middleware/index'); 

/* Job role Start */
const { getjobrole, updatejobrole ,addjobroles,getjobroleoptions, 
   editjobroleoptions,updatejobroleoptions,deletejobroleoptions,denyjobroleoptions,approvejobroleoptions } = require('../../controller/admin/jobrole'); 
/* Job role End */ 

 

/* Self Assessment Start */ 
const { addselfassessment ,getallselfassessmentcategory,editselfassessmentquestions,getallselfassesmentcategory,
  updateselfassessmentquestions, addselfassessmentquestions, editselfassessment, updateselfassessment, deleteselfassessmentquestion,
  addcategorytypes,getcategorytypes
  } = require('../../controller/admin/selfassessment'); 
 
/* Self Assessment  End*/ 


const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
      cb(null, path.join(path.dirname(__dirname), "uploads"));
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + "-" + file.originalname);   
    }, 
  });  
let upload = multer({ storage }); 
     
/* Self Assesment Start */
jobrolesRoutes.post('/self/addselfassessmentquestions',requireSigninAdmin,upload.none(),addselfassessmentquestions);  
jobrolesRoutes.get('/self/addselfassessmentquestions/:id',requireSigninAdmin,editselfassessmentquestions);
jobrolesRoutes.put('/self/updateselfassessmentquestions/:id',requireSigninAdmin,updateselfassessmentquestions);
jobrolesRoutes.get('/self/getallselfassesmentcategory/:id',requireSigninAdmin,getallselfassesmentcategory); 
jobrolesRoutes.post('/addselfassessment',upload.none(),addselfassessment);        
jobrolesRoutes.get('/getallselfassessmentcategory',requireSigninAdmin,getallselfassessmentcategory); 
jobrolesRoutes.delete('/self/deleteselfassessmentquestion/:id',requireSigninAdmin,deleteselfassessmentquestion)
jobrolesRoutes.get('/editselfassessment/:id', editselfassessment)   
jobrolesRoutes.put('/updateselfassessment/:id',upload.none(),updateselfassessment)  


/* Self assesment types */
jobrolesRoutes.post('/type/addcategorytypes',upload.none(),requireSigninAdmin,addcategorytypes);  
jobrolesRoutes.get('/type/getcategorytypes/:id',requireSigninAdmin,getcategorytypes);

/* Self assesment End */


/* Job role Starts */  


jobrolesRoutes.post('/onboarding/getjobrole',requireSigninAdmin,getjobrole);  
jobrolesRoutes.put('/onboarding/updatejobrole/:id',upload.none(),requireSigninAdmin,updatejobrole); 
jobrolesRoutes.post('/onboarding/addjobroles',upload.none(),requireSigninAdmin,addjobroles); 
jobrolesRoutes.post('/onboarding/getjobroleoptions',requireSigninAdmin,getjobroleoptions);    
jobrolesRoutes.get('/onboarding/editjobroleoptions/:id',requireSigninAdmin,editjobroleoptions);
jobrolesRoutes.put('/onboarding/updatejobroleoptions/:id',upload.none(),requireSigninAdmin,updatejobroleoptions);  
jobrolesRoutes.delete('/onboarding/deletejobroleoptions/:id',requireSigninAdmin,deletejobroleoptions);     
jobrolesRoutes.put('/onboarding/approvejobroleoptions/:id',requireSigninAdmin,approvejobroleoptions);    
jobrolesRoutes.put('/onboarding/denyjobroleoptions/:id',requireSigninAdmin,denyjobroleoptions);        

/* Job role ENds */
module.exports = jobrolesRoutes;                     
=======
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
>>>>>>> 326a07bec403b3587f4f1f5e6e2b481d85897661
