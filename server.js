let path = require('path') ; //nodejs 自带模块
let express = require('express') ; //引入express

let app = express() ;   //创建 express 实例

app.use('/lottery' , require('./lottery')) ;
app.use('/app-discovery' , require('./ganzhiData')) ; 

app.use(express.static('src')) ;  //指定静态资源所在的目录

// app.get('/' , function(req, res){
// 	res.sendFile(path.join(__dirname , '../index.html'));
// });

let server = app.listen(9006 , function(){
	console.log('app listening at http://localhost:9006');
});
