const { response } = require('express');
const { validationResult } = require('express-validator');

const createUser = (req, res = response) => {
    
    const { name, email, password } = req.body;

    // Mistakes's Driver
    const errors = validationResult( req );
    
    if( !errors.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }


    res.status(201).json({
        ok: "Todo ok",
        msg: "Registro",
        name,
        email,
        password
    })
}


const loginUser = (req, res = response) => {

    const { email, password } = req.body;
    
    // Mistakes's Driver
    const errors = validationResult( req );

    if( !errors.isEmpty() ) {
        return res.status(404).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    res.status(201).json({
        ok: "Todo ok",
        msg: "Login",
        email,
        password
    })
}





const renewToken = (req, res = response) => {
    res.json({
        ok: "Todo ok",
        msg: 'renew'
    })
}



module.exports = {
    createUser,
    loginUser,
    renewToken
}