const { response } = require('express');
const { validationResult } = require('express-validator');


const validFields = (req, res = response, next) => {

    // Mistakes's Driver
    const errors = validationResult( req );

    if( !errors.isEmpty() ) {
        return res.status(404).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    next();
}

module.exports = {
    validFields
}