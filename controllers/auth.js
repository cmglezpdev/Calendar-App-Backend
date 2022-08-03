const { response } = require('express');
const User = require('../models/User');

const createUser = async (req, res = response) => {
    
    const { email, password } = req.body;
    let user;

    try {

        // busca si existe un usuario con el mismo email
        user = await User.findOne({ email });
        if( user ) return res.status(400).json({ok: false, msg: "The email is used"})

        // grabar en la database
        user = new User( req.body );
        await user.save();
        
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: "Please, Talk with the admin"
        })
    }


    res.status(201).json({
        ok: true,
        msg: "User was created",
        uid: user.id,
        name: user.name
    })
}


const loginUser = (req, res = response) => {

    const { email, password } = req.body;
    
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