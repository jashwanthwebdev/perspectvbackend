const { Schema, model, }  = require("mongoose");


const selfAssessmentSchematype = Schema(
    {
        categoryid: {   
            type: Schema.Types.ObjectId,
            required: true,
            trim: true 
        },     
        type:[{options: { 
            type: String,
            trim: true    
        },id:{
            type:Number,
        },value:{
            type: String 
        }}]

    },   
    { timestamps: true }   
);
 



module.exports = model("selfassessmenttype", selfAssessmentSchematype);            
  