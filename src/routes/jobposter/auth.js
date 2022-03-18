const express = require('express');
const routerJobposter = express.Router();

const {signup, sendotp, verifyaccount, signin, forgotpassword, updatePassword} = require('../../controller/jobposter/auth');


routerJobposter.post('/signup', signup);
routerJobposter.post('/sendotp', sendotp);
routerJobposter.post('/verifyaccount', verifyaccount);
routerJobposter.post('/signin', signin);
routerJobposter.post('/forgotpassword', forgotpassword);
routerJobposter.post('/updatepassword', updatePassword);  

module.exports = routerJobposter;   