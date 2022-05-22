const express = require('express');
const routerOnboardingJobposter = express.Router();
const { requireSignin } = require('../../commen-middleware/index'); 

const { onboardingPoster,onboardinganswers } = require('../../controller/jobposter/onboarding');

routerOnboardingJobposter.post('/onboardinganswers',requireSignin, onboardinganswers)
routerOnboardingJobposter.get('/onboardingprocess/:category',requireSignin,  onboardingPoster); 


module.exports = routerOnboardingJobposter;    