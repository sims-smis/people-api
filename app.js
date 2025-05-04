const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
require('dotenv').config();

const app = express();
const dbUri = process.env.DB_URI;

// Middleware setup
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

// Connect to MongoDB
mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Set view engine and middleware for body parsing and method override
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Route setup
app.use('/', require('./routes/person'));


app.listen(3000, () => console.log('Server running on port 3000'));
