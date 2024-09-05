const express = require('express')
const db = require('../database/mongodb')

const questsController = {};


questsController.getQuest = async (req, res, next) => {

    try {

        const getNewQuest = await db.Quests.find({mode: "walking"})

        console.log(getNewQuest)
        // here we will do a call to the database, and in this case we are just going to ask for a chellenge in specific

        res.locals.message = {weeee: "This is comming from the controllers"}


        next();
        
    } catch (error) {
        
        return ("This is an error");

        return next(error);
    }; 
};



module.exports = questsController;