/*
    Users Routes / Auth
    host + /api/auth
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validFields } = require('../middlewares/field-validator');
const { createUser, loginUser, renewToken } = require('../controllers/auth');

const router = Router();


router.post(
    '/new', 
    [ // middlewears
        check('name', 'The name is required').not().isEmpty(),
        check('email', 'The email is required').isEmail(),
        check('password', 'The password should be least 6 characters').isLength({min: 6}),
        validFields
    ], 
    createUser
);

router.post(
    '/',
    [ // middlewares
        check('email', 'The email is required').isEmail(),
        check('password', 'The password should be least 6 characters').isLength({min: 6}),
        validFields
    ],
    loginUser
);

router.get('/renew', renewToken);



module.exports = router;