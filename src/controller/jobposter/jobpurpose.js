const jobroleModel = require('../../model/jobrole');
const jobroleanswerModel = require('../../model/jobroleanswers'); 

exports.jobrole = async(req,res,next)=>{
    let question = await jobroleModel.findById({_id:'623c96a38c86d4bc142f7dda'},{question:1}); 
    let answers  = await jobroleanswerModel.find({questionid:'623c96a38c86d4bc142f7dda'},{answers:1});
    res.status(200).json({message:'success', result:{question,answers}})
}


exports.jobtitle = async(req,res,next)=>{
    let question = await jobroleModel.findById({_id:'623c97a36e23ab27094e6c44'},{question:1}); 
    let answers  = await jobroleanswerModel.find({questionid:'623c97a36e23ab27094e6c44'},{answers:1});
    res.status(200).json({message:'success', result:{question,answers}})
}

exports.jobindustry = async(req,res,next)=>{ 
    let question = await jobroleModel.findById({_id:'623c9881b9386d3625eabd7f'},{question:1}); 
    let answers  = await jobroleanswerModel.find({questionid:'623c9881b9386d3625eabd7f'},{answers:1});
    res.status(200).json({message:'success', result:{question,answers}})
}

exports.jobindustry = async(req,res,next)=>{ 
    let question = await jobroleModel.findById({_id:'623c9881b9386d3625eabd7f'},{question:1}); 
    let answers  = await jobroleanswerModel.find({questionid:'623c9881b9386d3625eabd7f'},{answers:1});
    res.status(200).json({message:'success', result:{question,answers}})
}

exports.educationlevel = async(req,res,next)=>{ 
    let question = await jobroleModel.findById({_id:'623c9a5bdc9d721b3d66809e'},{question:1}); 
    let answers  = await jobroleanswerModel.find({questionid:'623c9a5bdc9d721b3d66809e'},{answers:1});
    res.status(200).json({message:'success', result:{question,answers}})
}

exports.skilllevel = async(req,res,next)=>{ 
    let question = await jobroleModel.findById({_id:'623c9bb1dc9d721b3d6680c0'},{question:1}); 
    let answers  = await jobroleanswerModel.find({questionid:'623c9bb1dc9d721b3d6680c0'},{answers:1});
    res.status(200).json({message:'success', result:{question,answers}})
}

exports.location = async(req,res,next)=>{ 
    let question = await jobroleModel.findById({_id:'623c9d17dc9d721b3d6680ce'},{question:1}); 
    let answers  = await jobroleanswerModel.find({questionid:'623c9d17dc9d721b3d6680ce'},{answers:1});
    res.status(200).json({message:'success', result:{question,answers}})
}

exports.companysize = async(req,res,next)=>{ 
    let question = await jobroleModel.findById({_id:'623c9ddecbef59e3c977c0c8'},{question:1}); 
    let answers  = await jobroleanswerModel.find({questionid:'623c9ddecbef59e3c977c0c8'},{answers:1});
    res.status(200).json({message:'success', result:{question,answers}})
} 

exports.hiring = async(req,res,next)=>{ 
    let question = await jobroleModel.findById({_id:'623c9e68cbef59e3c977c0d6'},{question:1}); 
    let answers  = await jobroleanswerModel.find({questionid:'623c9e68cbef59e3c977c0d6'},{answers:1});
    res.status(200).json({message:'success', result:{question,answers}})
}

exports.offer = async(req,res,next)=>{  
    let question = await jobroleModel.findById({_id:'623ca37ee1590ac1ec1d7dc5'},{question:1}); 
    let answers  = await jobroleanswerModel.find({questionid:'623ca37ee1590ac1ec1d7dc5'},{answers:1});
    res.status(200).json({message:'success', result:{question,answers}})
}
