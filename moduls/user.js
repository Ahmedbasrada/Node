const mongoose = require('mongoose')
const ModelSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true,
        maxlength: 50
    },
    email:{
        type:String,
        require: true,
        unique: true
    },
    password:{
        type:String,
        require: true,
        minlength: 6
    },
    watchList: [
        {
            movie:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Movie'
            },
            watched: Boolean
        }
    ],
    isAdmin:{
        type: Boolean,
        default: false
    },
    timestamps: {
        type: Boolean,
        default: false
    }
})


const Model = mongoose.model('User', ModelSchema)
module.exports = Model