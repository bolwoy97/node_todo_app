var app = require('express')();

app.get('/home',(req,res,next)=>{
    //Создадим новый handler который сидит по пути `/`
    res.render('index',{title:"Hello, world!"});
    // Отправим рендер образа под именем index
});
module.exports = app;