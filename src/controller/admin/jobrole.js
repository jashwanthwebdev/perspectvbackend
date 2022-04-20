const JobroleModel = require('../../model/jobrole');
const JobroleanswersModel = require('../../model/jobroleanswers'); 

exports.addjobrole = async (req, res, next) => {
    console.log(req.body)
    let question = await new JobroleModel({ question: req.body.question })
    let result = await question.save(); 
   // console.log(result) 
    let answers = req.body.answers;       
    await Promise.all(answers.map(async(val)=>{    
        let answer = await new JobroleanswersModel({answers: val,questionid:result._id})   
        await answer.save();  
    }));               
    res.status(200).json({message:'Added successfully'});                   
}            




 