const express = require('express');
const routerSelfassessment = express.Router();
const { requireSignin, requireSigninAdmin } = require('../../commen-middleware/index'); 

const { getselfassement,addselfassessment, } = require('../../controller/selfassessment/selfassessment');
const {selfassessementlist } = require('../../controller/admin/selfassessment'); 

routerSelfassessment.get('/getselfassessment',requireSignin, getselfassement);
routerSelfassessment.post('/addselfassessment', requireSignin,addselfassessment); 
routerSelfassessment.get('/selfassessementlist',requireSigninAdmin,selfassessementlist); 

module.exports = routerSelfassessment;        