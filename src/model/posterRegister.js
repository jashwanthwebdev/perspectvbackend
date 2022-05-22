<<<<<<< HEAD
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const jobposterSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
            min: 3,
            max: 20,
        },
        companyName: {
            type: String,
            required: true,
            trim: true,
            min: 3,
            max: 20,
        },
        contactNumber: { type: String },
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
        usertype:{ 
            type:Number,
            default:1
        },
        otp: {
            type: Number
        },
        isverified: {
            type: Boolean,
            default: false
        } 
    },

    { timestamps: true }
);


jobposterSchema.methods = {
    authenticate: async function (password) {
        return await bcrypt.compare(password, this.hash_password);
    },
};

=======
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const jobposterSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
            min: 3,
            max: 20,
        },
        companyName: {
            type: String,
            required: true,
            trim: true,
            min: 3,
            max: 20,
        },
        contactNumber: { type: String },
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
        isverified: {
            type: Boolean,
            default: false
        } 
    },

    { timestamps: true }
);


jobposterSchema.methods = {
    authenticate: async function (password) {
        return await bcrypt.compare(password, this.hash_password);
    },
};

>>>>>>> 326a07bec403b3587f4f1f5e6e2b481d85897661
module.exports = mongoose.model("jobposter", jobposterSchema);  