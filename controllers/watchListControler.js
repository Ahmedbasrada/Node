const User = require('../moduls/user')

exports.delete = async (req, res, next) => {
    const {movie} = req.params
    const user = await User.findById(req.userId)
    user.watchist = user.watchList.filter(e => e.movie != movie)
    await User.save()
    res.json({
        success: true
    })
}



exports.list = async (req, res, next) => {
    const user = await User.findById(req.userId).select('-watchList._id').populate('watchList.movie', ['name','category'])
    res.json({
        success: true,
        data: user.watchList
    })
}

exports.add = async (req, res, next) => {
    const {movie, watched} = req.body
    const user = await User.findById(req.userId)
    const index = user.watchList.findIndex(e => e.movie == movie)

    if(index> -1){
        user.watchList[index].watched
    }else{
        user.watchList.push({movie, watched})
    }
    await user.save()
    res.status(201).json({
        success: true
    })
}