const selfassessmentModel = require('../../model/selfassessment');

exports.addselfassessment = async(req,res,next)=>{
    let answers = [];
    req.body.options.map(val=>{
        answers.push({options: val})
    });  
    let obj ={
        question:req.body.question,
        answers
    }
    let self = new selfassessmentModel(obj) 
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