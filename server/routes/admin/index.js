module.exports = app => {
    const express = require('express')
    const router = express.Router({
        mergeParams:true//合并参数
    }) //express子路由需挂载到app.use



    // 新增项目
    router.post('/', async (req, res) => {
        const model = await Product.create(req.body)
        res.send(model)
    })
    // 编辑
    router.put('/:id', async (req, res) => {
        const model = await Product.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })
    // 查看详情
    router.get('/:id', async (req, res) => {
        const model = await Product.findById(req.params.id)
        res.send(model)
    })

    // 列表
    router.get('/', async (req, res) => {
        const items = await req.Model.find().limit(10)
        res.send(items)
    })
    //删除
    router.delete('/:id', async (req, res) => {
        await Product.findByIdAndDelete(req.params.id, req.body)
        res.send({
            success: true
        })
    })



    app.use('/admin/api/rest/:resource',async (req,res,next)=>{
        const modelName = require('inflection').classify(req.params.resource)
        req.Model = require(`../../models/${modelName}`)
        next()
    } ,router)
}