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
  