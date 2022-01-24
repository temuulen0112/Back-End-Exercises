const express = require('express');
// express(); We can call it simply like this
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!!! ZAAA GG DUUSAAA')
})
app.listen(3000);