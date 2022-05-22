const JobroleModel = require('../../model/jobrole');
const JobroleanswersModel = require('../../model/jobroleanswers');
const AdminModel = require('../../model/admin');
const jobposterModel = require('../../model/posterRegister'); 
var Mongoose = require('mongoose');
var ObjectId = Mongoose.Types.ObjectId;
// exports.addjobrole = async (req, res, next) => {
//     console.log(req.body)
//     let question = await new JobroleModel({ question: req.body.question })
//     let result = await question.save(); 
//    // console.log(result)  
//     let answers = req.body.answers;       
//     await Promise.all(answers.map(async(val)=>{    
//         let answer = await new JobroleanswersModel({answers: val,questionid:result._id})   
//         await answer.save();  
//     }));               
//     res.status(200).json({message:'Added successfully'});                   
// }            


exports.getjobrole = async (req, res, next) => { 
    console.log(req.body);
    // let type = 'jobrole'; 
    
    let result = await JobroleModel.find({ category: req.body.category }, { question: 1, category: 1, usertype: 1 });
    res.status(200).json({ message: 'success', result }); 
}



exports.updatejobrole = async (req, res, next) => {
    //let id='623c96a38c86d4bc142f7dda'; 
    let result = await JobroleModel.findByIdAndUpdate({ _id: req.params.id }, { question: req.body.question });
    res.status(200).json({ message: 'Updated success' });
}

exports.addjobroles = async (req, res, next) => {
    let obj = {
        category: req.body.category,
        usertype: req.body.usertype,
        option: req.body.option,
        userId:req.user._id  
    } 
    let result = new JobroleanswersModel(obj);
    result.save();
    res.status(200).json({ message: 'Added successfully' });
}

exports.getjobroleoptions = async (req, res, next) => {

    let id = req.body.category;
    let search = { category: id };
     if(req.body.filterby == 'admin'){
        search['addedby'] = { $in: ['3'] }
    }else if(req.body.filterby == 'front'){
        search['addedby'] = { $in: ['1','2'] }
    } 
    if (!req.body.search) {
        search['usertype'] = { $in: ['1', '2', '3'] }

    } else if (req.body.search == 3) {
        search['usertype'] = { $in: ['1', '2', '3'] }
    } else {
        search['usertype'] = { $in: [req.body.search] } 
    }
  
    let result = await JobroleanswersModel.find(search, { option: 1, category: 1, usertype: 1,status:1,addedby:1,userId:1 });
    let finalresult = [];   
    await Promise.all(result.map( async(val)=>{  
         let obj={_id:val._id,option:val.option,category:val.category,usertype:val.usertype,addedby:val.addedby,status:val.status,userId:val.userId};
        // console.log(obj)
         let adminresult = await AdminModel.findOne({_id:ObjectId(val.userId)},{fullName:1});
         console.log('admin',adminresult)
         let jobposterResult = await jobposterModel.findOne({_id:ObjectId(val.userId)},{fullName:1})
        // let jobseekerResult = awa
         console.log('poster',jobposterResult)
         if(adminresult){
             obj['name'] = adminresult.fullName; 
         }else if(jobposterResult){
            obj['name'] = jobposterResult.fullName;
         }else {
            obj['name'] = 'Unknown'; 
         }
         finalresult.push(obj); 
    })); 
    res.status(200).json({ message: 'success', result:finalresult });   
}

exports.editjobroleoptions = async (req, res, next) => {
    let id = req.params.id;
    let result = await JobroleanswersModel.findById({ _id: id }, { option: 1, category: 1, usertype: 1 });
    res.status(200).json({ message: 'success', result })
}

exports.updatejobroleoptions = async (req, res, next) => {
    let id = req.params.id;
    let type = await JobroleanswersModel.findById({ _id: id }, { usertype: 1,category:1,option:1 });
    console.log(type); 
    let obj;   
    let result; 
    if (type.usertype === req.body.usertype) {
        obj = {  
            category: type.category,  
            usertype: type.usertype, 
            option: req.body.option
        }
        result = await JobroleanswersModel.findByIdAndUpdate({ _id: id }, obj); 
        res.status(200).json({ message: 'updated success' })
    }else if(type.usertype == 3 && req.body.usertype == 2){
        let obj1 ={
            category: type.category, 
            usertype: 1,       
            option: type.option 
        }
        let second = await JobroleanswersModel(obj1);          
        await second.save();  
        let obj2 = {
            category: type.category,
            usertype: 2, 
            option: req.body.option
        }
        result = await JobroleanswersModel.findByIdAndUpdate({ _id: id }, obj2);   
        res.status(200).json({ message: 'updated success' })                                                           
    }else if(type.usertype == 3 && req.body.usertype == 1){
        let obj1 ={
            category: type.category,
            usertype: 2,
            option: type.option
        }
        let second = await JobroleanswersModel(obj1); 
        await second.save(); 
        let obj3 = {
            category: type.category,
            usertype: 1,
            option: req.body.option
        }
        result = await JobroleanswersModel.findByIdAndUpdate({ _id: id }, obj3);
        res.status(200).json({ message: 'updated success' })
    }else if(type.usertype == 2 && req.body.usertype == 1){
        obj = {
            category: type.category,
            usertype: 1,
            option: req.body.option
        }
        result = await JobroleanswersModel.findByIdAndUpdate({ _id: id }, obj);
        res.status(200).json({ message: 'updated success' })
    }else if(type.usertype == 1 && req.body.usertype == 2){
        obj = {
            category: type.category,
            usertype: 2,
            option: req.body.option
        }
        result = await JobroleanswersModel.findByIdAndUpdate({ _id: id }, obj);
        res.status(200).json({ message: 'updated success' })
    }else if(type.usertype == 1 && req.body.usertype == 3){
        obj = {
            category: type.category,
            usertype: 3,
            option: req.body.option 
        }
        result = await JobroleanswersModel.findByIdAndUpdate({ _id: id }, obj);
        res.status(200).json({ message: 'updated success' })
    }
    else if(type.usertype == 2 && req.body.usertype == 3){
        obj = {
            category: type.category,
            usertype: 3,
            option: req.body.option
        }
        result = await JobroleanswersModel.findByIdAndUpdate({ _id: id }, obj);
        res.status(200).json({ message: 'updated success' })  
    }


   

}

exports.deletejobroleoptions = async (req, res, next) => {
    let id = req.params.id;
    let result = await JobroleanswersModel.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: 'Deleted success' });
}

exports.approvejobroleoptions = async (req, res, next) => { 
    let id = req.params.id; 
    let result = await JobroleanswersModel.findByIdAndUpdate({ _id: id }, { status: 1 });
    res.status(200).json({ message: 'Approved' })
}

exports.denyjobroleoptions = async (req, res, next) => {
    let id = req.params.id;
    let result = await JobroleanswersModel.findByIdAndUpdate({ _id: id }, { status: 0 });
    res.status(200).json({ message: 'Disapprove' });
}




