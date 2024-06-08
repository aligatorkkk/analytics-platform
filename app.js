const express = require('express');

const app = express();

const post = 5005;

app.use(express.static('public'));

app.listen(port, () => {
    console.log('server succesful, listening on port ${port}')
})