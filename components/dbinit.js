// Инициализация датабазы!
// Загрузим mongoose
var mongoose = require('mongoose');
// Заменим библиотеку Обещаний (Promise) которая идет в поставку с mongoose (mpromise)
mongoose.Promise = require('bluebird');
// На Bluebird
// Подключимся к серверу MongoDB
// В дальнейшем адрес сервера будет загружаться с конфигов

mongoose.connection.on('error',(err)=>
{
    console.error("Database Connection Error: " + err);
    // Скажите админу пусть включит MongoDB сервер :)
    process.exit(2);
});

// Данная функция будет вызвано когда подключение будет установлено
mongoose.connection.on('connected',()=>
{
    // Подключение установлено
    console.log("Succesfully connected to MongoDB Database");
    // В дальнейшем здесь мы будем запускать сервер.
});

connect = async function () {
    await mongoose.connect(
      'mongodb://localhost:27017/todos',
      {
        useNewUrlParser: true,
        useFindAndModify: false
      }
    )
    
}

module.exports.connect = connect
