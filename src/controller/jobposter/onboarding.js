const JobroleModel = require('../../model/jobrole');
const JobroleanswersModel = require('../../model/jobroleanswers');
const OnboardinganswersModel = require('../../model/onboardinganswers'); 


exports.onboardingPoster = async(req,res,next)=>{ 
        const category = req.params.category;   
        let data = [];  
        let result     = await JobroleModel.find({category:category,usertype:2},{question:1});
        await Promise.all(result.map( async(val)=>{  
                let question = {question:val.question,qid:val._id} 
                 let result2  = await JobroleanswersModel.find({category:category,usertype:{$in:['2','3']}},{option:1});
                 question['option']   = result2;
                data.push(question);
               
        })); 
         res.status(200).json({message:'success',data});       
} 
  
exports.onboardinganswers = async(req,res,next)=>{  
    console.log(req.user)  
    let data;
    if(req.body.other){
    let obj={
        category: req.body.category,
        usertype: 2,
        option: req.body.other, 
        addedby:2,  
        userId:req.user._id,
        status:2 
    } 
    let result = new JobroleanswersModel(obj);
     data = await result.save();
     
   } 
   console.log(data)
    let obj1  = {
        question:req.body.qid,
        option:req.body.option ? req.body.option : data._id,     
        addedby:req.user._id, 
        usertype:2   
    }  
    let result1 = await OnboardinganswersModel(obj1);   
    await result1.save();  
    res.status(200).json({message:'success'});  
} 

