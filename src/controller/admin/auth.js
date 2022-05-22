<<<<<<< HEAD
const adminModel = require('../../model/admin');
const jwt = require("jsonwebtoken");


const generateJwtToken = (_id, role) => {
    return jwt.sign({ _id, role }, 'admin', {
        expiresIn: "1d", 
    });
};


exports.signin = (req, res) => { 
    console.log(req.body); 


    adminModel.findOne({ email: req.body.email }).exec(async (error, user) => {
        if (error) return res.status(400).json({ error });
        console.log(user)
        if (user) { 
            if(user.isverified == false){
                return res.status(400).json({message:"Please verify you account"});   
            }
            const isPassword = await user.authenticate(req.body.password); 
            console.log(isPassword)   
            if (isPassword) {  

                const token = generateJwtToken(user._id,'admin');     
                const { _id, fullName } = user;  
                res.status(200).json({   
                    token, 
                    user: { _id, fullName },
                });
            } else { 
                return res.status(400).json({ 
                    message: "Please provide valid details", 
                });
            } 
        } else {
            return res.status(400).json({ message: "Please provide valid details" }); 
        }
    });
=======
const adminModel = require('../../model/admin');
const jwt = require("jsonwebtoken");


const generateJwtToken = (_id, role) => {
    return jwt.sign({ _id, role }, 'admin', {
        expiresIn: "1d", 
    });
};


exports.signin = (req, res) => { 
    console.log(req.body); 


    adminModel.findOne({ email: req.body.email }).exec(async (error, user) => {
        if (error) return res.status(400).json({ error });
        console.log(user)
        if (user) { 
            if(user.isverified == false){
                return res.status(400).json({message:"Please verify you account"});   
            }
            const isPassword = await user.authenticate(req.body.password); 
            console.log(isPassword)   
            if (isPassword) {  

                const token = generateJwtToken(user._id,'admin');     
                const { _id, fullName } = user;  
                res.status(200).json({   
                    token, 
                    user: { _id, fullName },
                });
            } else { 
                return res.status(400).json({ 
                    message: "Please provide valid details", 
                });
            } 
        } else {
            return res.status(400).json({ message: "Please provide valid details" }); 
        }
    });
>>>>>>> 326a07bec403b3587f4f1f5e6e2b481d85897661
};