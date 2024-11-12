const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(3000, function () {
    console.log(`Hello ${process.env.NAME}`);
    console.log('App listening on port 3000.');
});
