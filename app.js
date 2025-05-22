const express = require('express');

// create express app
const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});

module.exports = app;