const express = require('express');
const app = express()
const PORT = 8080;


app.get('/new', (req, res) => {

    res.json({"users": ["userOne", "userTwo", "userThree"] });
})

app.get('/api', (req, res) => {

    res.json(["Hellow"])
})



app.listen(PORT, () => {

    console.log(`Listening in port... ${PORT}`);
})
