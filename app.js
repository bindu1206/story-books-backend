const path = require('path')
const express = require("express")
const dotenv = require("dotenv")
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const connectDB = require("./config/db")
const passport = require('passport')
const session = require('express-session')

// Load environment variables
dotenv.config({ path: "./config/config.env" })

//Passport config
require('./config/passport')(passport)

// Connect to database
connectDB();

const app = express();

//Using Morgan - HTTP request logger
if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}

//Handlebars
app.engine('.hbs', engine({defaultLayout: 'main' , extname: '.hbs'}));
app.set('view engine', '.hbs');

// Sessions
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}))

//Passport middleware
app.use(passport.initialize())
app.use(passport.session())


//Static folder
app.use(express.static(path.join( __dirname , 'public')));

//Routes
app.use('/' , require('./routes/index'))
app.use('/auth' , require('./routes/auth'))

const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});

