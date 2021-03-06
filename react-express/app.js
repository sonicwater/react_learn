// 引入模块
var express = require('express');
var path = require('path');
var ejs = require('ejs');

var app = express();

// 对所有(/)URL或路由返回index.html 
app.get('/', function (req, res) {
    res.render('index');
});

// 对所有(/)URL或路由返回index.html 
app.get('/api/list', function (req, res) {
    res.json({
    	"status":200,
    	"message":"success",
    	"data":{
    		"list":["sonic","lily","xintong","this"]
    	}
    });
});

// 设置views路径和模板
app.set('views', './client/view');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

// 静态文件配置
app.use('/client/static', express.static(path.join(__dirname, 'client/static')));

// 启动一个服务，监听从8888端口进入的所有连接请求
var server = app.listen(8888, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listening at http://%s:%s', host, port);
}); 