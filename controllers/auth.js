const { response } = require('express');


const createUser = (req, res = response) => {
    res.json({
        ok: "Todo ok",
        msg: "Registro"
    })
}


const loginUser = (req, res = response) => {
    res.json({
        ok: "Todo ok",
        msg: "Login"
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