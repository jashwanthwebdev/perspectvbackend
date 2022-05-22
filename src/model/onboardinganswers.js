const { Schema, model, } = require("mongoose");
const OnboardinganswersSchema = new Schema(
    {
        question:{
            type: Schema.Types.ObjectId, 
        },
        option: {
            type: Schema.Types.ObjectId,
            required: true
        }, 
        addedby:{
            type: Schema.Types.ObjectId, 
            required: true
        },
        usertype:{
            type:String,
        },
        

    },{ timestamps: true } 
);

module.exports = model("onboardinganswers", OnboardinganswersSchema);    