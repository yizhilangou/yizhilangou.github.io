
const express = require("express")
const app = express()
app.use(express.static("./"))
app.listen(82,()=>{
    console.log("服务开启在81端口")
})