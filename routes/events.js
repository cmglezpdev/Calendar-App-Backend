/*
    Events Routes / Events
    host + /api/events
*/
const { Router } = require("express");
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events')
const { validJWT } = require('../middlewares/jwt-validator');


const router = Router();

// Up the level the validJWT(aplly like general middleware because is apply to all routes)
router.use(validJWT)

// Get events
router.get('/', getEvents);

// Create Event
router.post('/', createEvent);

// Update Event
router.put('/:id', updateEvent);

// Delete Event
router.delete('/:id', deleteEvent);



module.exports = router;

