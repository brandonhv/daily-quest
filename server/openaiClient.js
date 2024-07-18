// server/openaiClient.js
const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({
    organization: "org-FL5lGY9wt5XYcvEwrG2Zc4nT",
    apiKey: process.env.OPENAI_API_KEY,
});

module.exports = openai;


