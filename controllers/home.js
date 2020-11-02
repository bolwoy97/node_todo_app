var express = require('express');
var app = express();
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/',(req,res,next)=>{
    res.render('index',{title:"Hello, world!"});
});

router.get('/test',(req,res,next)=>{
    //Создадим новый handler который сидит по пути `/`
    res.send('test22');
    // Отправим рендер образа под именем index
});


module.exports = router;