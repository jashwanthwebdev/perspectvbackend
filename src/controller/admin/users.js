const jobSeekerModel = require('../../model/seekerRegister');
const jobPoserModel  = require('../../model/posterRegister'); 



exports.seekerlist = async(req,res,next)=>{
    let result = await jobSeekerModel.find({},{fullName:1,email:1,location:1,isverified:1});
    res.status(200).json({message:'success',result})
}

exports.posterlist = async(req,res,next)=>{
    let result = await jobPoserModel.find({},{fullName:1,companyName:1,email:1,location:1,isverified:1});
    res.status(200).json({message:'success',result})
}  