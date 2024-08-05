// server.js
require('dotenv').config();
const express = require('express');
const app = express();
const openAIRequest = require('./controllers/openaiRequest')
const PORT = 8080;
const cors = require('cors')
const makeOpenAIRequest = require('./controllers/openaiRequest')


app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Existing endpoint
app.get('/new', (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] });
});

// New endpoint to generate text
app.post('/generate-text', async (req, res) => {
    try {
        const result = await makeOpenAIRequest();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

