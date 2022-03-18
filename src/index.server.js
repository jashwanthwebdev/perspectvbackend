const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const env = require("dotenv");
const port = process.env.PORT || 5800; 

//environment variable or you can say constants
env.config();


//routes
const authJobposterRoutes = require('./routes/jobposter/auth');

app.use(cors());
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use("/api/jobposter", authJobposterRoutes);
 
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