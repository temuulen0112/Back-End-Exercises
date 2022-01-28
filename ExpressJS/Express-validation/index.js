const express = require('express');
const app = express();
const { body, validationResult } = require('express-validator');
const port = 3001;
app.use(express.json());
// const nameCheck = /[a-zA-Z0-9]{4,15}/;
// const emailCheck = /([a-zA-Z0-9_.+-]+)@[a-zA-Z0-9_.+-]+\.[a-zA-Z0-9_.+-]/;
// const passwordCheck = /[a-zA-Z0-9]{8,15}/;
// const phoneCheck = /\d{8,11}/;

// app.post("/register", (req, res) => {
//     const data = req.body;
//     let name = data.name;
//     let email = data.email;
//     let password = data.password;
//     let phone = data.phone;
//     let validName = nameCheck.test(name);
//     let validEmail = emailCheck.test(email);
//     let validPassword = passwordCheck.test(password);
//     let validPhone = phoneCheck.test(phone);
//     if (validPhone){
//         res.send('whahhaha this is a number')
//     } 
//     if (validEmail) {
//         res.send('email registered')
//     }
//     if(validName & validEmail & validPhone & validPassword) {
//         results.map((dt) => {
//             dt.push(validName)
//         })
//         results.push(validName)
//         results.push(validEmail)
//         results.push(validPhone)
//         results.push(validPassword)
//     }
//     console.log(`Name is ${validName}`)
//     console.log(`Email is ${validEmail}`)
//     console.log(`Password is ${validPassword}`)
//     console.log(`Phone is ${validPhone}`)
// })

// app.post('/register', body("name").not().isEmpty(), (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() })
//     } else {
//         res.json({
//             success: true
//         })
//     }
// })

app.post(
    '/register', 
    body("name").not().isEmpty(),
    // body("address").matches(/^[A-Z-a-z-\s]+$),
    body("email").isEmail().withMessage("Wrong email"),
    body("phone").isNumeric().isLength({ min: 8, max: 20 }),
    body("password").isLength({ min: 6, max: 12 }).withMessage("Must be at least 6 chars long"),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        } else {
            const data = req.body;
            res.json({
                success: true
            })
        }
    }
)

// app.post('/register/test', (req, res) => {
//     const data = req.body;
//     res.json({
//         'success': true,
//         'data': data,
//         'message': 'successfully recieved data'
//     })
// })

const validate = () => {
    return [
        body("email")
        .isEmail()
        .custom((value) => {
            if (!value.includes("mstars")) 
                throw new Error("Not Appropriate email!!!");
            return true;
        }),
        body("password")
        .isLength({ min: 6, max: 12 })
        .withMessage("Must be at least 6 chars long"),
        (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() })
            } else {
                const data = req.body;
                res.json({
                    success: true
                })
            }
        }
    ]
}

app.post(
    "/login",
    body("email")
        .isEmail()
        .custom((value) => {
            if (!value.includes("mstars")) throw new Error("Not Appropriate email!!!");
            return true;
        }),
    body("password")
        .isLength({ min: 6, max: 12 })
        .withMessage("Must be at least 6 chars long"),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        } else {
            const data = req.body;
            res.json({
                success: true
            })
        }
    }
)

app.post(
    "/sanitize",
    body("type").replace(["js"], "javascript"),
    body("username").toLowerCase(),
    body("extension").default("png"),
    body("paragraph").trim(),
    (req, res) => {
        const data = req.data;
        res.json({
            success: true,
            data: data,
            message: "successfully recieved data!"
        })
    }
)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});