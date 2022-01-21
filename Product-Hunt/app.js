const fs = require('fs')
const request = require('request');


request('http://52.221.191.153/api/foods', function (error, response, body) {
    console.log(body);
    const data = JSON.parse(body).data
    console.log(data.data)
    data.forEach(food => {
        // console.log(food.name)
        // console.log(food.price)
        // console.log(food.portion)
        // console.log(food.stock)
        // console.log(food.price)
        let content = food.name+ " | " + food.price + " | " + food.portion + " | " +food.stock + " | " + food.price + "\n" 
        fs.writeFileSync('/Users/mstars_lab1_07/Desktop/Product-Hunt/foods.txt', content, { flag: 'a+' }, err => {
            if(err) {
                console.error(err)
                return
            }
        })
    });
});