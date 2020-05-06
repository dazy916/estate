module.exports = app => {
    const router = require('express').Router()
    const Category = require('../../models/Category')

    router.get('/news/list', async (req, res) => {
        const parent = await Category.findOne({
            name: '新闻分类'
        })
        const cats = await Category.aggregate([
            { $match: { parent: parent } },
            {
                $lookup: {
                    from: 'article',
                    localField: '_id',
                    foreignField: 'categories',
                    as: 'newsList'
                }
            }
        ])//aggregate为mongodb得聚合查询
        res.send(cats)

    })
    app.use('/web/api', router)
}