const { response } = require('express');
const Event = require('../models/Event');

const createEvent = async ( req, res = response ) => {

    const event = new Event( req.body );

    try {
        
        event.user = req.uid;
        const eventDB = await event.save();

        res.json({
            ok: true,
            msg: "Create Event",
            event: eventDB
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({ok:false, msg:"Please, Talk with the admin"});
    }
}

const getEvents = async ( req, res = response ) => {
    
    const events = await Event.find().populate('user', 'name')

    res.json({
        ok: true,
        msg: "Get Events",
        events
    })
}

const updateEvent = ( req, res = response ) => {

    res.json({
        ok: true,
        msg: "Update Event"
    })
}

const deleteEvent = ( req, res = response ) => {

    res.json({
        ok: true,
        msg: "Delete Event"
    })
}


module.exports = {
    getEvents,
    updateEvent,
    deleteEvent,
    createEvent
}