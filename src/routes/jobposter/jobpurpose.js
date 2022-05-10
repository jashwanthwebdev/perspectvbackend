const express = require('express');
const routerJobPurpose = express.Router();

const { jobrole, jobtitle, jobindustry , educationlevel, skilllevel,location , companysize, hiring, offer} = require('../../controller/jobposter/jobpurpose'); 
const { requireSignin } = require('../../commen-middleware/index'); 
routerJobPurpose.get('/jobrole',requireSignin,  jobrole);
routerJobPurpose.get('/jobtitle', requireSignin, jobtitle);
routerJobPurpose.get('/jobindustry', requireSignin, jobindustry); 
routerJobPurpose.get('/educationlevel', requireSignin, educationlevel); 
routerJobPurpose.get('/skilllevel', requireSignin, skilllevel); 
routerJobPurpose.get('/location', requireSignin, location);
routerJobPurpose.get('/companysize', requireSignin, companysize); 
routerJobPurpose.get('/hiring', requireSignin, hiring); 
routerJobPurpose.get('/offer', requireSignin, offer); 

module.exports = routerJobPurpose;         
