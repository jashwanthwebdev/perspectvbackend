const { Schema, model, } = require("mongoose")


const jobRoleanswersSchema = new Schema(
    {
        
        option: {
            type: String,
            required: true,  
            trim: true
        },     
        category:{
            type:String,
            required:true,
            trim:true
        },
        usertype:{ 
          type:String,
          required:true,
          trim:true 
        }, 
        addedby:{
            type:String,  
            default:'3' 
        },
        userId:{
            type: Schema.Types.ObjectId, 
        },
        status:{   
            type:Number, 
            default:1 
        }
    },  
    { timestamps: true } 
);
 

  

module.exports = model("jobroleanswers", jobRoleanswersSchema);       
  