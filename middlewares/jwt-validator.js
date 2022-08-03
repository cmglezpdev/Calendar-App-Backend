const { response } = require("express")
const jwt = require('jsonwebtoken');

const validJWT = (req, res = response, next) => {

    // x-token ==> this is the headers
    const token = req.header('x-token');

    if( !token ) {
        return res.status(401).json({ok:false, msg:"There is no token in the request"})
    }

    try {
        // Revisa el token y si es valido devuelve su contenido
        const payload = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        );

        req.uid = payload.uid;
        req.name = payload.name;

    } catch (error) {
        console.log(error);
        return res.status(401).json({ok:false, msg: "Token is not valid"})
    }

    next();
}


module.exports = {
    validJWT
}