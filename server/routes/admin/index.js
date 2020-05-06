module.exports = app => {
    const express = require('express')
    const jwt = require('jsonwebtoken')
    const User = require('../../models/User')
    const assert = require('http-assert')
    const router = express.Router({
        mergeParams: true//合并参数
    }) //express子路由需挂载到app.use


    // 登录校验中间件
    const authMiddleware = require('../../middleware/auth')
    // 资源中间件
    const resourceMiddleware =  require('../../middleware/resource')

    // 新增
    router.post('/', authMiddleware(),async (req, res) => {
        const model = await req.Model.create(req.body)
        res.send(model)
    })
    // 编辑
    router.put('/:id', authMiddleware(),async (req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })
    // 列表
    router.get('/',authMiddleware(), async (req, res) => {
        const queryOptions = {}
        if (req.Model.modelName === 'Category') {
            queryOptions.populate = 'parents'
        }
        const items = await req.Model.find().setOptions(queryOptions).limit(100)
        res.send(items)
    })
    // 获取已有值
    router.get('/:id', authMiddleware(), async (req, res) => {
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })
    //删除
    router.delete('/:id',authMiddleware(),  async (req, res) => {
        await req.Model.findByIdAndDelete(req.params.id, req.body)
        res.send({
            success: true
        })
    })
    // 通用接口
    app.use('/admin/api/rest/:resource',authMiddleware(),resourceMiddleware() , router)

    // 上传
    const multer = require('multer')
    const upload = multer({ dest: __dirname + '/../../uploads' })
    app.post('/admin/api/upload', upload.array('file'),authMiddleware(), async (req, res) => {
        const files = req.files
        files.forEach(element => {
            element.url = `http://localhost:4000/uploads/${element.filename}`
            //    items.push(element.url)
        });
        res.send(files)

    })

    // 登录
    app.post('/admin/api/login', async (req, res) => {
        const { username, password } = req.body
        // 根据用户名找用户
        const loginUser = await User.findOne({ username }).select('+password')//username是一个键值对格式
        assert(loginUser, 422, '用户不存在')
        // 校验密码
        const isValid = require('bcryptjs').compareSync(password, loginUser.password)
        assert(isValid, 422, '密码错误')
        // 返回token
        const jwt = require('jsonwebtoken')
        const token = jwt.sign({ id: loginUser._id }, app.get('secret'))
        res.send({ token })
    })

    // 错误处理函数
    app.use(async (err, req, res, next) => {
        res.status(err.statusCode || 500).send({
            message: err.message
        })
    })
}