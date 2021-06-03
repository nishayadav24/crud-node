const db = require('../../Model');
const User=db.user;
const userAdd = async(req,resp)=>{
    let data =await User.create();

    console.log(data.dataValues);
    let response={
        data :'ok'
    }
    resp.status(200).json(response);
}

var userupdate = async(req,resp)=>{
    //insert
    let data =await User.update({name:"nisha  yadav"},{
    where:{
        id:1
    }
    });
    console.log(data.dataValues);
//
    let response={
        data :'ok'
    }
    resp.status(200).json(response);
}

var userdelete = async(req,resp)=>{
    //insert
    let data =await User.destroy({
    where:{
        id:2
    }
    });
    console.log(data.dataValues);
//
    let response={
        data :'ok'
    }
    resp.status(200).json(response);
}

var truncate = async(req,resp)=>{
    //insert
    let data =await User.destroy({
  truncate:false
    });
    console.log(data.dataValues);
//
    let response={
        data :'ok'
    }
    resp.status(200).json(response);
}

var find = async(req,resp)=>{
    //insert
    let data =await User.findAll({});
    console.log(data.dataValues);
//
    let response={
        data :'ok'
    }
    resp.status(200).json(response);
}

module.exports={
    userAdd,
    userupdate,
    userdelete,
    truncate,
    find
}