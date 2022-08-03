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

const updateEvent = async ( req, res = response ) => {

    const eventId = req.params.id;
    const uid = req.uid;

    try {
        
        const event = await Event.findById(eventId);
        if( !event ) 
            return res.status(404).json({ok:false, msg:"The event no exist with that id"}); 

        if( event.user.toString() !== uid ) 
        return res.status(401).json({ok:false, msg:"You don\'t have access to update this event"})

        const newEvent = {
            ...req.body,
            user: uid
        }
        const updatedEvent = await Event.findByIdAndUpdate( eventId, newEvent, {new: true} );

        return res.json({
            ok: true,
            event: updatedEvent
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({ok:false, msg:"Please, Talk with the admin"});   
    }

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