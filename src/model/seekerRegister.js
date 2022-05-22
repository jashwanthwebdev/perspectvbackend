const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const jobseekerSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true, 
            trim: true,
            min: 3,
            max: 20,
        }, 
        contactNumber: { type: Number },
        pofilePicture: { type: String },
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            index: true,
            lowercase: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,  
            lowercase: true,
        },
        hash_password: { 
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
            trim: true,
            min: 3, 
            max: 20,
        }, 
        otp: {
            type: Number
        },
        usertype:{ 
            type:Number,
            default:1
        },
        isverified: {
            type: Boolean,  
            default: false
        } 
    },

    { timestamps: true }
);


jobseekerSchema.methods = {
    authenticate: async function (password) {
        return await bcrypt.compare(password, this.hash_password);
    },
};

module.exports = mongoose.model("jobseeker", jobseekerSchema);   