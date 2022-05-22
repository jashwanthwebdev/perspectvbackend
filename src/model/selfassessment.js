<<<<<<< HEAD
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
=======
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
>>>>>>> 326a07bec403b3587f4f1f5e6e2b481d85897661
  