const { Schema, model, } = require("mongoose")


const jobRoleanswersSchema = new Schema(
    {
        questionid:{ 
            type: Schema.Types.ObjectId,
            required: true
        },
        answers: { 
            type: String,
            required: true,  
            trim: true
        },    
       
    }, 
    { timestamps: true } 
);
 

  

module.exports = model("jobroleanswers", jobRoleanswersSchema);       
  