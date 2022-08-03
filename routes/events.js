/*
    Events Routes / Events
    host + /api/events
*/
const { Router } = require("express");
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events')
const { validJWT } = require('../middlewares/jwt-validator');


const router = Router();

// Get events
router.get('/', validJWT, getEvents);

// Create Event
router.post('/', validJWT, createEvent);

// Update Event
router.put('/:id', validJWT, updateEvent);

// Delete Event
router.delete('/:id', validJWT, deleteEvent);



module.exports = router;

