const User = require('../moduls/user')
// ستأتي هذا الملف بعد ملف
// auth.js
exports.check = async(req, res, next) =>{
    const user = await User.findById(req.userId)
    user.isAdmin ? next(): res.status(403).json({massage: 'Forbidden'})
}