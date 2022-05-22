<<<<<<< HEAD
const mongoose = require("mongoose");


const jobRoleSchema = new mongoose.Schema(
    {
        question: {   
            type: String,
            required: true,
            trim: true 
        },    
        category:{
            type:String, 
        }, 
        usertype:{ 
            type:String   
        } 
    },  
    { timestamps: true } 
);
 



module.exports = mongoose.model("jobrole", jobRoleSchema);         
=======
const mongoose = require("mongoose");


const jobRoleSchema = new mongoose.Schema(
    {
        question: {   
            type: String,
            required: true,
            trim: true 
        },    
    },  
    { timestamps: true } 
);
 



module.exports = mongoose.model("jobrole", jobRoleSchema);         
>>>>>>> 326a07bec403b3587f4f1f5e6e2b481d85897661
  