<<<<<<< HEAD
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
=======
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
>>>>>>> 326a07bec403b3587f4f1f5e6e2b481d85897661
  