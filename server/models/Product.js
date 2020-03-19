const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String },
    address: { type: String },//项目地址
    proStatus: { type: String },//项目状态
    price: { type: String },//均价
    aere: { type: String },//占地面积
    layout: { type: String },//户型
    years: { type: String },//产权年限
    delivery: { type: String },//交房时间
    saleAddress: { type: String },//售楼地址
    salePhone: { type: String },//售楼电话
    developers: { type: String },//开发商
    proType: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Item'
    }],//产品类型
    parking: { type: String },//车位数量
    pakingRatio: { type: String },//车位比
    greenRatio: { type: String },//绿化率
    plotRatio: { type: String },//容积率
    propertyType: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Item'
    }],//物业类型
    property: { type: String },//物业公司
    propertyFee: { type: String },//物业费
    house: [{
        apartment: { type: String },
        proImg: {type:Array},
        fileLists: {type:Array},
    }]
})

module.exports = mongoose.model('Product', schema)