// server.js
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 8080;
const openai = require('./openaiClient');

// Middleware to parse JSON bodies
app.use(express.json());

// Existing endpoint
app.get('/new', (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] });
});

// New endpoint to generate text
app.post('/generate-text', async (req, res) => {
    const { prompt } = req.body;
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 100,
            temperature: 0.7,
        });
        res.json({ text: response.data.choices[0].text });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});