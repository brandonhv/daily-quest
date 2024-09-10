const express = require('express')
const db = require('../database/mongodb')

const questsController = {};

// We can create the logic that choses the random challenge here.




questsController.getQuest = async (req, res, next) => {

    try {

        const getNewQuest = await db.Quests.find({mode: "Bycicle"})

        const questToSend = getNewQuest[0].quest;

        res.locals.message = {oneQuest: questToSend}


        next();
        
    } catch (error) {
        
        return ("This is an error");

        return next(error);
    }; 
};



module.exports = questsController;