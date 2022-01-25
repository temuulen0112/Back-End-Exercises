
const express = require('express');
const app = express();
const request = require('request');
var content = ''

    request('http://52.221.191.153/api/foods', function (error, response, body) {
        const data = JSON.parse(body)
        let food = data.data;
        // console.log(data.data)
        food.forEach(food => {
            content += `<ol> name: ${food.name} \n price: ${food.price} \n portion: ${food.portion} \n stock: ${food.stock} \n ingredients: ${food.ingredients} </ol>`;
        });
    });
app.get('/api/foods', (req, res) => {
    res.send(content)
});
app.listen(5001);