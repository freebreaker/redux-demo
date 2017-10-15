
var express=require("express")
var app=express()
var server = require("http").createServer(app)
var io = require("socket.io")(server)
var axios=require("axios")

io.on('connection',(socket) => {
    socket.on("message",function(user,msg){

        if(/静静/.test(msg)){
            axios.post("http://www.tuling123.com/openapi/api",{
                key:"90aa86059a18400c977154d12640fb06",
                info:msg,
                userid:user
            }).then((res) => {
                console.log(res)
                io.sockets.emit("chat","静静:"+ res.data.text)
            })
        }

        io.sockets.emit("chat",user + ":" + msg)
    })
})

server.listen(3003)

app.use(express.static("./public"))