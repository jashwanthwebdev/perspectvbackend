const selfassessmentModel = require('../../model/selfassessment');
const selfassessmentquestionsModel = require('../../model/selfassessmentquestions'); 
const selfassessmentanswersModel   = require('../../model/selfassessmentanswers'); 
const selfassessmenttype = require('../../model/selfassessmenttype'); 
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

    let obj ={
        question: req.body.question,
        category:  req.body.category, 
        answers :  req.body.answers
    }
    let self = new selfassessmentquestionsModel(obj)  
    await self.save();   
    res.status(200).json({message:'Added successfully'})    

}

exports.editselfassessmentquestions = async(req,res,next)=>{
    let id = req.params.id;
    let result = await selfassessmentquestionsModel.findById({_id: id});
    res.status(200).json({message:'success', result}) 
}

exports.updateselfassessmentquestions = async(req,res,next)=>{
    let id = req.params.id; 
    let obj ={
        question: req.body.question, 
        category:  req.body.category,  
        answers :  req.body.answers
    } 
    let result = await selfassessmentquestionsModel.findByIdAndUpdate({_id:id},obj); 
    res.status(200).json({message:'success'}) 
}
 
exports.getallselfassesmentcategory = async(req,res,next)=>{
    let id = req.params.id; 
    let result = await selfassessmentquestionsModel.find({category:id});
    res.status(200).json({message:'success',result});  
}

exports.deleteselfassessmentquestion = async(req,res,next)=>{
    let id = req.params.id;
    let result = await selfassessmentquestionsModel.findByIdAndDelete({_id:id});
    res.status(200).json({message:'success'}); 
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



/* Self category Types */
exports.addcategorytypes = async(req,res,next)=>{ 
    let obj = {
        categoryid: '6278b412d8f94199725fc8c7', 
        type: [{options:'Assertive',id:1,value:'A'},{options:'Turbulent',id:2,value:'T'}]
    }
    let result = new selfassessmenttype(obj);
    await result.save();   
    res.status(200).json({message:'success'})
}

exports.getcategorytypes = async(req,res,next)=>{
    let id = req.params.id;
    let result = await selfassessmenttype.findOne({categoryid:id},{type:1});
    res.status(200).json({message:"success",result}) 
} 



exports.selfassessementlist = async(req,res,next)=>{ 
    let disUserId = await selfassessmentanswersModel.distinct('userId'); 
    
    await Promise.all(disUserId.map( async(val)=>{
            let mindT = [0]; 
            let mindI = [0]; 
            let category = await selfassessmentanswersModel.find({category:'6278b3f0d8f94199725fc8c3'});  
            
            await Promise.all(category.map( async(val)=>{
                let result = await selfassessmentquestionsModel.findOne({answers:{$elemMatch: {_id:val.optionId}}},{_id:0, "answers.$":1});
                if(result.answers[0].result == 'Thinking'){
                    mindT[0] = mindT[0]+ result.answers[0].percentage; 
                }else{
                    mindI[0] = mindI[0]+ result.answers[0].percentage;
                }
                //mind.push(result.answers[0].result ==);
            }))
         
           // res.status(200).json({mind})
    })); 
    
}