const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const util = require('util');
app.use(express.json());

// app.get('/users/:userId/books/:bookId/bookName/:bookNameId', function (req, res) {
//     const user_id = req.params.userId
//     const readFile = util.promisify(fs.readFile)
//     readFile('user.json')
//         .then((text) => {
//             const data = JSON.parse(text.toString("utf8"));
//             data.map((dt) => {
//                 if(dt.id == user_id) {
//                     res.send(dt);
//                 }
//             })
//             res.send("Not Found")
//         })
//         .catch((err) => {
//             console.log("Error", err)
//         })
//     res.send(req.params)
//     console.log(req.params.userId)
//     res.send('Hello World!!! ZAAA GG DUUSAAA BOOOMM')
// })

// app.post('/', function (req, res) {
//     res.send('Got a POST request')
// })

// app.put('/user', function (req, res) {
//     res.send('Got a PUT request at/user')
// })


// app.get('/flights/:from-:to', function (req, res) {
//     res.send(req.params)
// })

// app.get('/plantae/:genus.:species', function (req, res) {
//     res.send(req.params)
// })


// app.get('/library', function (req, res) {
//     res.send(req.query)
// })


app.post("/search", (req, res) => {
    let results = []
    const category = req.query.category;
    const readFile = util.promisify(fs.readFile);
    readFile("./foods.json") 
        .then((text) => {
            const data = JSON.parse(text.toString("utf-8"))
            data.map((food) => {
                if(food.category == category) {
                    results.push(food)
                }
            })
            res.send(results)
        })
        .catch((err) => {
            console.log("Error", err)
        })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});