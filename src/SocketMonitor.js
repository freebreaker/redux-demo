



export function SocketMonitor (io){

    //有用户加入
    io.on("add user", ()=>{console.log("add user")});
    //用户离开
    io.on("user leave", ()=>{console.log("leave user")} );
    // 接收消息
    io.on("new message", (data) => {
        console.log("new message")
    });
}