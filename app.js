const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.send('test');
})
app.listen('https://sleepy-citadel-54178.herokuapp.com');
console.log('running');