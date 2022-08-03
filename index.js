const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');
require('dotenv').config();



// Build the server
const app = express();

// Database
dbConnection();

// Use Cords
app.use( cors() );


// Midelweare
app.use( express.static('public') );

// Reading and Parser of body
app.use(express.json());


// Routes
app.use('/api/auth', require('./routes/auth')); 
app.use('/api/events', require('./routes/events'));



// Lisening 
app.listen(process.env.PORT, () => {
    console.log("Servidor completo")
})
