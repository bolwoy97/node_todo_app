const dotenv = require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const exphbs = require('express-handlebars')

const todoRoutes = require('./routes/todos')
const sessionsRoutes = require('./routes/sessions')

const dbinit = require('./components/dbinit'); 

const session = require('express-session')
const MongoStore = require('connect-mongo')(session); // Хранилище сессий в монгодб
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(require('./components/errorHandler'));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  /*name: 'nma_session',
  proxy: true,*/
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));


app.use(todoRoutes)
app.use(sessionsRoutes)

app.use(require('./controllers'));

async function start() {
  try {
    await dbinit.connect()
    app.listen(PORT, () => {
      console.log('Server has been started...')
    })
  } catch (e) {
    console.log('Server start Error: '+e)
  }
}

start()
