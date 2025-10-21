const path = require('path')
const express = require("express")
const dotenv = require("dotenv")
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const connectDB = require("./config/db")

// Load environment variables
dotenv.config({ path: "./config/config.env" })

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

//Static folder
app.use(express.static(path.join( __dirname , 'public')));

//Routes
app.use('/' , require('./routes/index'))

const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});

