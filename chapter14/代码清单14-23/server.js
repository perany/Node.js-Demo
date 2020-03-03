﻿var express = require('express');
var fs=require('fs');
var app = express();
var mysql = require('mysql');
app.use(express.bodyParser());
app.use(express.methodOverride());
//app.use(express.methodOverride('test'));
var pool = mysql.createPool({
    host     : 'localhost',
    port     : 3306,
    database : 'mysql',
    user     : 'root',
    password : 'root',
});
app.get('/index.html',function (req,res) {
    res.sendfile(__dirname+'/index.html');
});
app.put('/index.html',function (req,res) {
    console.log(req.originalMethod);
    pool.getConnection(function(err, connection) {
        if(err) res.send('与MySQL数据库建立连接失败。');
        else{
            var str;
            connection.query('INSERT INTO users SET ?',{username:req.body.username,firstname:req.body.firstname},function(err,result){
                if(err) str='在服务器端MySQL数据库中插入数据失败。';
                else    str='在服务器端MySQL数据库中插入数据成功。';
                connection.release();
                res.send(str);
            });
        }
    });
});
app.listen(1337, "127.0.0.1");
