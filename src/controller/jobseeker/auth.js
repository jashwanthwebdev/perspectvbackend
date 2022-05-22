const seekerRegister = require("../../model/seekerRegister");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt"); 
const shortid = require("shortid");


const generateJwtToken = (_id, role) => {
    return jwt.sign({ _id, role }, 'Developerrules', {
        expiresIn: "1d", 
    });
}; 

exports.signup = (req, res) => {
    seekerRegister.findOne({ email: req.body.email }).exec(async (error, user) => { 
        if (user)
            return res.status(400).json({
                error: "User already registered", 
            });

        const { fullName, companyName, email, location, password } = req.body;
        const hash_password = await bcrypt.hash(password, 10);
        const _user = new seekerRegister({
            fullName,
            companyName,
            email,
            location,
            hash_password,
         //   otp:Math.floor(100000 + Math.random() * 900000),
            otp:123456,
            username: shortid.generate(),
        });

        _user.save((error, user) => { 
            if (error) {
                return res.status(400).json({
                    message: "Something went wrong",
                });
            }

            if (user) {

                const { _id, fullName, email } = user;
                return res.status(200).json({
                    message:'success', 
                    user: { _id, fullName, email },   
                }); 
            } 
        });
    });
};

exports.sendotp = async (req, res, next) => {
    seekerRegister.findOne({ email: req.body.email }).exec(async (error, user) => {
        if (user) {
            if (req.body.type == 'SMS') {
                // send sms 
                await seekerRegister.findOneAndUpdate({  email: req.body.email }, { contactNumber: req.body.contactNumber })
                const { _id } = user; 
                return res.status(201).json({
                    message:"OTP send successfully",
                    user: { _id, }
                });
            } else if (req.body.type == 'EMAIL') { 
                // SEND SMS 
                const { _id } = user; 
                return res.status(201).json({ 
                    message:"OTP send successfully",
                    user: { _id }
                });
            }
        } else {
            return res.status(400).json({
                message: "Please provide valid details"
            });
        }

    })
}


exports.verifyaccount = async (req, res, next) => {
    seekerRegister.findOne({ otp: req.body.otp, _id: req.body._id }).exec(async (error, user) => {
        if (user) {
            await seekerRegister.findByIdAndUpdate({ _id: req.body._id }, { isverified: true })
            return res.status(200).json({
                message: "Account verified success, Please login" 
            });
        }
    })
}


exports.signin = (req, res) => {
    seekerRegister.findOne({ email: req.body.email }).exec(async (error, user) => {
        if (error) return res.status(400).json({ error });
        if (user) {
            if(user.isverified == false){ 
                return res.status(400).json({message:"Please verify you account"}); 
            }
            const isPassword = await user.authenticate(req.body.password);
            console.log(isPassword)  
            if (isPassword) {

                const token = generateJwtToken(user._id); 
                const { _id, fullName, companyName, contactNumber, email, location, password } = user;
                res.status(200).json({
                    token,
                    user: { _id, fullName, companyName, contactNumber, email, location, password },
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
};


exports.forgotpassword = async (req, res, next) => {
    seekerRegister.findOne({ email: req.body.email }).exec(async (error, user) => {
        // send otp to mail 
        const { _id } = user;
        return res.status(201).json({ 
            message:"OTP sent successfully", 
            user: { _id, }
        });
    });
}


exports.updatePassword = async (req, res, next) => { 
    const hash_password = await bcrypt.hash(req.body.password, 10);
    let update = await seekerRegister.findByIdAndUpdate({ _id: req.body._id },{hash_password});
    console.log(update)
    if (update) { 
        return res.status(201).json({  
            message: "Password update successfully" 
        });
    }
}


