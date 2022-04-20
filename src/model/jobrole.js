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
  