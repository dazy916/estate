module.exports = app => {
    const express = require('express')
    const router = express.Router({
        mergeParams: true//合并参数
    }) //express子路由需挂载到app.use

    // 新增项目
    router.post('/', async (req, res) => {
        const model = await req.Model.create(req.body)
        res.send(model)
    })
    // 编辑
    router.put('/:id', async (req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })
    // 查看详情
    router.get('/:id', async (req, res) => {
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })

    // 列表
    router.get('/', async (req, res) => {
        const items = await req.Model.find().limit(10)
        res.send(items)
    })
    //删除
    router.delete('/:id', async (req, res) => {
        await req.Model.findByIdAndDelete(req.params.id, req.body)
        res.send({
            success: true
        })
    })

    app.use('/admin/api/rest/:resource', async (req, res, next) => {
        const modelName = require('inflection').classify(req.params.resource)
        req.Model = require(`../../models/${modelName}`)
        next()
    }, router)

    // 上传
    const multer = require('multer')
    const upload = multer({ dest: __dirname + '/../../uploads' })
    app.post('/admin/api/upload', upload.array('file'), async (req, res) => {
        const files = req.files 
        const items= []  
        files.forEach(element => {
            element.url = `http://localhost:4000/uploads/${element.filename}`
        //    items.push(element.url)
        }); 
        res.send(files)

    })
}