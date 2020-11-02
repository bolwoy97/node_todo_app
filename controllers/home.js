var app = require('express')();

app.get('/home',(req,res,next)=>{
    res.render('index',{title:"Hello, world!"});
});

app.get('/test',(req,res,next)=>{
    //Создадим новый handler который сидит по пути `/`
    res.send('test22');
    // Отправим рендер образа под именем index
});


module.exports = app;