const express = require('express');
const app = express();
const port = 3001;
const nameCheck = /[a-zA-Z0-9]{4,15}/;
const emailCheck = /([a-zA-Z0-9_.+-]+)@[a-zA-Z0-9_.+-]+\.[a-zA-Z0-9_.+-]/;
const passwordCheck = /[a-zA-Z0-9]{8,15}/;
const phoneCheck = /\d{8,11}/;
app.use(express.json());

app.post("/register", (req, res) => {
    const data = req.body;
    let name = data.name;
    let email = data.email;
    let password = data.password;
    let phone = data.phone;
    let validName = nameCheck.test(name);
    let validEmail = emailCheck.test(email);
    let validPassword = passwordCheck.test(password);
    let validPhone = phoneCheck.test(phone);
    let results =[];
    // if (phoneCheck.test(phone)){
    //     res.send('whahhaha this is a number')
    // } else {
    //     res.send('invalid email')
    // }
    if(validName & validEmail & validPhone & validPassword) {
        results.map((dt) => {
            dt.push(validName)
        })
        // results.push(validName)
        // results.push(validEmail)
        // results.push(validPhone)
        // results.push(validPassword)
    }
    console.log(`Name is ${validName}`)
    console.log(`Email is ${validEmail}`)
    console.log(`Password is ${validPassword}`)
    console.log(`Phone is ${validPhone}`)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});