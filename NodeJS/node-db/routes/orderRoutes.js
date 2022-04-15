const express = require('express');
const router = express.Router();
const orderServices = require('../services/orderServices');

router.get("/", async function (req, res, next) {
    try {
        res.json(await orderServices.getOrders(req.query.page));
    } catch(err) {
        console.error(`Error while getiing orders `, err.message)
        next(err);
    }
});

module.exports = router;