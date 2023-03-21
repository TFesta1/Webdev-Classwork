const express = require("express");
const router = express.Router();


router
    .get("/", (req, res) => {
        res.send({
            items: [
                { name: "Product 1", price: 10, },
            ]
        })
    })
    .get("/", (req, res) => { })
    .get("/:id", (req, res) => { })
    .post("/", (req, res) => { 
        res.send("Thank you for your order")
    })
    .patch("/:id", (req, res) => { })
    .delete("/:id", (req, res) => { })


module.exports = router