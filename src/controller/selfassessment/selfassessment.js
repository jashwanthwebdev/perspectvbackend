const selfassessmentanswersModel = require('../../model/selfassessmentanswers');
const selfassessmentquestionsModel = require('../../model/selfassessmentquestions');

exports.getselfassement = async (req, res, next) => {
    //   let result =  await selfassessmentquestionsModel.find({},{category:1,question:1,answers: {$elemMatch: {options: 1}}});
    let result = await selfassessmentquestionsModel.aggregate([
        { $project: { _id: 1, category: '$category', question: '$question', answers: { options: 1, _id: 1 } } }]);
    res.status(200).json({ message: 'success', result })
}


exports.addselfassessment = async (req, res, next) => {  
    let category = await selfassessmentquestionsModel.findOne({questionId:req.body.question},{category:1}); 
    const obj = {   
        userId: req.user._id,
        usertype: 2,    
        questionId: req.body.question, 
        optionId:  req.body.option, 
        category: category.category 
    }
    let count = await selfassessmentanswersModel.find({userId:req.user._id,questionId:req.body.question}).countDocuments();
    if(count == 0){
    let result = await selfassessmentanswersModel(obj); 
    await result.save(); 
    res.status(200).json({ message: 'success' })
    }else{ 
        let result = await selfassessmentanswersModel.findOneAndUpdate({questionId:req.body.question,userId:req.user._id},obj)
        res.status(200).json({ message: 'success' }); 
    }
    
}