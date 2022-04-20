const mongoose = require("mongoose");


const selfAssessmentSchema = new mongoose.Schema(
    {
        question: {   
            type: String,
            required: true,
            trim: true 
        },    
        answers: [{
            options: {
                 type: String,
                 trim: true  
             }
         }
         ], 
    },  
    { timestamps: true } 
);
 



module.exports = mongoose.model("selfassessment", selfAssessmentSchema);          
  