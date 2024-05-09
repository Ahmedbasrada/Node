const User = require('../moduls/user')
const jwtHelpers = require('../utils/jwtHelpers')
const bcrypt = require('bcrypt')

exports.login =  async (req, res)=>{
    const { password, email}= req.body
    const user = await User.findOne({email})
    if(user && bcrypt.compareSync(password, user.password))
    {
    res.json({
        success: true,
        data:{
            id: user.id,
            name: user.name,
            accessToken: jwtHelpers.sign({sub: user.id})
        }
    })
    }else{
        res.status(401).json({
            massage: 'Invalid creadentivals!'
        })
    }
}


exports.register =  async (req, res)=>{
    const {name, password, email}= req.body
    const user = User({
        name,
        email,
        password: bcrypt.hashSync(password, 8)
    })

    try {
        await user.save()
        res.json({
            success: true
        })
    }catch(e){
        res.status(500).json({
            massage: 'Something went wrong!'
        })
    }
   
}

exports.me =  async (req, res)=>{
    const user = await User.findById(req.userId)

    res.json({
        success: true,
        data:{
            id: user.id,
            name: user.name,
            email: user.email
        }
    })
}