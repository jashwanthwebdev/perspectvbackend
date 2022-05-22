const { Schema, model, } = require("mongoose");


const selfAssessmentanswersSchema = new Schema(
    { 
        userId:{
            type: Schema.Types.ObjectId,
            required: true
        },
        usertype:{
            type:String,
        },
        category:{
            type: Schema.Types.ObjectId, 
            required: true
        },
        questionId:{
            type: Schema.Types.ObjectId, 
            required: true
        }, 
        optionId:{
            type: Schema.Types.ObjectId,
            required: true
        },
       
    },   
    { timestamps: true } 
); 
 



module.exports = model("selfassessmentanswers", selfAssessmentanswersSchema);          
  