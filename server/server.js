// server.js
require('dotenv').config();

const express = require('express');
const app = express();
const openAIRequest = require('./controllers/openaiRequest')
const PORT = 8080;
const cors = require('cors')
const makeOpenAIRequest = require('./controllers/openaiRequest')

const questsController = require('./controllers/questsController')


app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Existing endpoint
app.get('/new', (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] });
});

// New endpoint to generate text
app.post('/generate-text', async (req, res) => {
    // try {
    //     const result = await makeOpenAIRequest();
    //     res.json(result);
    // } catch (error) {
    //     res.status(500).json({ error: error.message });
    // }

    res.send("Weeee we won;t be using the AI call no more")
});


// This is a get request
app.get('/receive-challenge', questsController.getQuest, (req, res) =>{

    res.status(200).send(res.locals.message)

})


app.use((err, req, res, next) => {
    console.error(err.stack);  // Logs the stack trace of the error
    res.status(500).send('Something went wrong!');
});



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});




