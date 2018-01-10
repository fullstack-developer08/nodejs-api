const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    res.send('test');
})
app.listen('8080', 'api.way2programming.com');
console.log('running');