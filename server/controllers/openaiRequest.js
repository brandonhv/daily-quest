require('dotenv').config({ path: '../.env' });
const fetch = require('node-fetch');


// This code should be activate when the happy buttom is clicked
const makeOpenAIRequest = async () => {
    const myHeaders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
    };

    const raw = JSON.stringify({
        "model": "gpt-4",
        "messages": [
            {
                "role": "user",
                "content": "Give me a random challenge, i feel happy. Give me the steps in 5 steps"
            }
        ],
        "temperature": 1,
        "top_p": 1,
        "n": 1,
        "stream": false,
        "max_tokens": 250,
        "presence_penalty": 0,
        "frequency_penalty": 0
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw
    };

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", requestOptions);
        const result = await response.json();

        console.log("here from Controler: ", result)

        // This same message is the one that you want to give so you may Display this data into the Main content when happy buttom is press
        console.log(result.choices[0].message.content);
        return result;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch OpenAI response');
    }
};

module.exports = makeOpenAIRequest;
