const selfassessmentModel = require('../../model/selfassessment');
const selfassessmentquestionsModel = require('../../model/selfassessmentquestions'); 
var mongoose = require('mongoose');


exports.addselfassessment = async(req,res,next)=>{

    let obj ={
        category:req.body.category
    }
    let self = new selfassessmentModel(obj)  
    await self.save();   
    res.status(200).json({message:'Added successfully'})    
} 

exports.getallselfassessmentcategory = async(req,res,next)=>{
    let result = await selfassessmentModel.find({},{category:1}); 
    res.status(200).json({message:'Success',category:result})
}

exports.addselfassessmentquestions = async(req,res,next)=>{
    let answers = [{options:'Frequently',result:'Extrovert',percentage:70},{options:'Never',result:'Introvert',percentage:70}];
   // console.log(req.body); 
    
    let obj ={
        question: 'How often do you friends ?',
        category:  mongoose.Types.ObjectId('6278a8bf982c0746c38c26f2'), 
        answers
    }
    let self = new selfassessmentquestionsModel(obj)  
    await self.save();   
    res.status(200).json({message:'Added successfully'})    

}


exports.editselfassessment = async(req,res,next)=>{ 
    let result = await selfassessmentModel.findById({_id:req.params.id});  
    res.status(200).json({message:'success',result})
}

exports.updateselfassessment = async(req,res,next)=>{ 
    let answers = [];
    console.log(req.body)
    req.body.options.map(val=>{
        answers.push({options: val})    
    });         
 
    let obj ={  
        question:req.body.question, 
        answers   
    }
    let result = await selfassessmentModel.findByIdAndUpdate({_id:req.params.id},obj);   
    res.status(200).json({message:'success'})
}