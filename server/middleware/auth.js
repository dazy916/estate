module.exports = option => {

    const jwt = require('jsonwebtoken')
    const User = require('../models/User')
    const assert = require('http-assert')

    return async (req, res, next) => {
        const token = String(req.headers.authorization || '').split(' ').pop()
        assert(token, 401, '请先登录')//无token
        const { id } = jwt.verify(token, req.app.get('secret'))//解密ID
        assert(id, 401, '请先登录')//无效token
        req.user = await User.findById(id)//通过ID找到该用户是否存在
        assert(req.user, 401, '请先登录')//用户不存在
        await next()
    }
}