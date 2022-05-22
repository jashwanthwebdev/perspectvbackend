const mongoose = require("mongoose");


const selfAssessmentSchema = new mongoose.Schema(
    {
        category: {   
            type: String,
            required: true,
            trim: true 
        },     
    },  
    { timestamps: true }   
);
 



module.exports = mongoose.model("selfassessment", selfAssessmentSchema);          
  