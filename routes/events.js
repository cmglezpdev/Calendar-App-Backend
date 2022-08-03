/*
    Events Routes / Events
    host + /api/events
*/
const { Router } = require("express");
const { check } = require("express-validator");
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { isDate } = require("../helpers/isDate");
const { validFields } = require("../middlewares/field-validator");
const { validJWT } = require('../middlewares/jwt-validator');


const router = Router();

// Up the level the validJWT(aplly like general middleware because is apply to all routes)
router.use(validJWT)

// Get events
router.get('/', getEvents);

// Create Event
router.post(
    '/', 
    [
        check('title', 'The title is required').not().isEmpty(isDate),
        check('start', 'The start date is required').custom(isDate),
        check('end', 'The end date is required').custom(isDate),
        validFields
    ],
    createEvent
);

// Update Event
router.put(
    '/:id',
    [
        check('title', 'The title is required').not().isEmpty(isDate),
        check('start', 'The start date is required').custom(isDate),
        check('end', 'The end date is required').custom(isDate),
        validFields
    ],
    updateEvent
);

// Delete Event
router.delete('/:id', deleteEvent);



module.exports = router;

