const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { genJWT } = require('../helpers/jwt');

const createUser = async (req, res = response) => {
    
    const { email, password } = req.body;

    try {

        // busca si existe un usuario con el mismo email
        let user = await User.findOne({ email });
        if( user ) return res.status(400).json({ok: false, msg: "The email is used"})

        user = new User( req.body );
        // Encrypting password
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);
        // save in database
        await user.save();
        
        // Generate JWT
        const token = await genJWT( user.id, user.name );

        return res.status(201).json({
            ok: true,
            msg: "User was created",
            uid: user.id,
            name: user.name,
            token
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Please, Talk with the admin"
        })
    }

}


const loginUser =  async (req, res = response) => {

    const { email, password } = req.body;
    
    try {
    
        let user = await User.findOne({ email });   
        if( !user ) return res.status(400).json({ok: false, mgs:"The email or password don't exisit"})

        const validPlassword = bcrypt.compareSync(password, user.password);
        if( !validPlassword ) return res.status(400).json({ok: false, mgs:"The password is incorrect"})

        // Generate JWT
        const token = await genJWT( user.id, user.name );


        return res.json({
            ok: true,
            msg: "User was logged",
            uid: user.id,
            name: user.name,
            token
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Please, talk with the admin"
        })
    }
}





const renewToken = async (req, res = response) => {
    
    const { uid, name } = req;

    try {
        // generate JWT
        const token = await genJWT( uid, name );
        
        return res.json({
            ok: true,
            msg: "JWT was revalidate",
            uid,
            name,
            token
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: "Field to revalidate token"
        })     
    }
    
}



module.exports = {
    createUser,
    loginUser,
    renewToken
}