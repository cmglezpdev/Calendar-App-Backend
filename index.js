const express = require('express');
require('dotenv').config();



// Build the server
const app = express();


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
