const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    res.send('test');
})
app.listen('81', 'api.way2programming.com');
console.log('running');