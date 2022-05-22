const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const env = require("dotenv");
const port = process.env.PORT || 5800; 
console.log(port)
//environment variable or you can say constants
env.config();


//Job Post routes
const authJobposterRoutes = require('./routes/jobposter/auth');
const authJobseekerRoutes = require('./routes/jobseeker/auth'); 
const usersRoutes         = require('./routes/admin/users'); 
const routerJobPurpose    = require('./routes/jobposter/jobpurpose'); 
const routerOnboardingJobposter = require('./routes/jobposter/onboarding');     
const routerSelfassessment = require('./routes/selfassessment/selfassessment'); 

//Admin Routes
const adminRoutes =  require('./routes/admin/auth'); 
const jobrolesRoutes = require('./routes/admin/jobrole');
const { application } = require("express");

 
app.use(cors());
//app.use(express.urlencoded({ extended: true }));   
app.use(express.json());    
app.use("/public", express.static(path.join(__dirname, "uploads")));    
 
 
// Job post routes
app.use("/api/jobposter", authJobposterRoutes);
app.use('/api/jobseeker',authJobseekerRoutes); 
app.use('/api/admin',usersRoutes)
app.use('/api/jobposter/jobpurpose', routerJobPurpose); 
app.use('/api/jobposter',routerOnboardingJobposter)  
app.use('/api/selfassessment',routerSelfassessment); 

// Admin Routes 
app.use('/api/admin', adminRoutes);   
app.use('/api/admin', jobrolesRoutes); 
mongoose
  .connect(
    `mongodb+srv://nyx:Password1@hiyamee.hbljr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
    }  
  )    
  .then(() => {   
    console.log("Database connected");      
  }); 
  
app.listen(port, () => {   
    console.log(`Server is running on port ${port}`);  
});    