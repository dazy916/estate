const express = require('express')
const app = express()

app.set('secret','12dwe1q12af')//app实例上set一个‘secret’值

app.use(require('cors')())//跨域模块
app.use(express.json())
app.use('/uploads',express.static(__dirname + '/uploads'))

require('./plugins/db')(app)
require('./routes/admin')(app)
require('./routes/web')(app)


app.listen(4000, () => {
    console.log('http://localhost:4000')
})