const moment = require('moment');

const isDate = (value, { req, location, path }) => {

    if( !value ) return false;
    
    const date = moment( value );
    return date.isValid() 
}


module.exports = { isDate }