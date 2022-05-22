const express = require('express');
const req = require('express/lib/request');
const usersRoutes = express.Router();
const multer = require('multer');    
const { requireSigninAdmin } = require('../../commen-middleware/index'); 



const { seekerlist, posterlist} = require('../../controller/admin/users');

usersRoutes.get('/jobseeker',requireSigninAdmin,seekerlist);
usersRoutes.get('/jobposter',requireSigninAdmin,posterlist); 
 

module.exports = usersRoutes;  