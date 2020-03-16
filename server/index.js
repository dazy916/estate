const express = require('express')
const app = express()

app.use(require('cors')())//跨域模块
app.use(express.json())

require('./plugins/db')(app)
require('./routes/admin')(app)

app.listen(4000, () => {
    console.log('http://localhost:4000')
})