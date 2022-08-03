const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();



// Build the server
const app = express();

// Database
dbConnection();

// Midelweare
app.use( express.static('public') );

// Reading and Parser of body
app.use(express.json());


// Routes
app.use('/api/auth', require('./routes/auth')); 
// TODO: crud events


// Lisening 
app.listen(process.env.PORT, () => {
    console.log("Servidor completo")
})
