<<<<<<< HEAD
const { Schema, model, } = require("mongoose");


const selfAssessmentquestionsSchema = new Schema(
    {
        category:{
            type: Schema.Types.ObjectId,
            required: true
        },
        question: {   
            type: String, 
            required: true,
            trim: true 
        },    
        answers: [{
            options: { 
                 type: String,
                 trim: true  
             },
             result:{
                 type:String,
                 trim: true
             },
             percentage:{  
                 type:Number,
                 time: true
             }
         }
         ], 
    },  
    { timestamps: true } 
); 
 



module.exports = model("selfassessmentquestions", selfAssessmentquestionsSchema);          
=======
const { Schema, model, } = require("mongoose");


const selfAssessmentquestionsSchema = new Schema(
    {
        category:{
            type: Schema.Types.ObjectId,
            required: true
        },
        question: {   
            type: String, 
            required: true,
            trim: true 
        },    
        answers: [{
            options: { 
                 type: String,
                 trim: true  
             },
             result:{
                 type:String,
                 trim: true
             },
             percentage:{  
                 type:Number,
                 time: true
             }
         }
         ], 
    },  
    { timestamps: true } 
); 
 



module.exports = model("selfassessmentquestions", selfAssessmentquestionsSchema);          
>>>>>>> 326a07bec403b3587f4f1f5e6e2b481d85897661
  