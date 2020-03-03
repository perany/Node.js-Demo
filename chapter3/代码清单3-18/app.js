﻿var http = require('http');//引用http模块
var server = http.createServer();//创建http服务器并将该服务器赋值给变量server

var testFunction=function(req,res) {
    if(req.url!=="/favicon.ico")
        console.log('发送响应完毕。');
};
//为server服务器在接收到客户端请求时触发的request事件绑定多个事件处理函数
server.on('request', function(req,res) {
    if(req.url!=="/favicon.ico")
        console.log('接收到客户端请求。');
});

server.on('request', function(req,res) { 
    if(req.url!=="/favicon.ico"){
        console.log(req.url);
    }
    res.end();
});

server.on('request',testFunction);
server.removeAllListeners('request');
server.on('request', function(req,res) { 
    if(req.url!=="/favicon.ico"){
        console.log("你好");
    }
    res.end();
});
server.listen(1337, "127.0.0.1");

