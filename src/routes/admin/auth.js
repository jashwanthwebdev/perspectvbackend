const express = require('express');
const adminRoutes = express.Router();


const { signin} = require('../../controller/admin/auth');

adminRoutes.post('/signin', signin);   

 
module.exports = adminRoutes;      