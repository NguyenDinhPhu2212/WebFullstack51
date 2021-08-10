const Joi = require("joi");
const express = require("express");
const cartItems = require("../model/cart");
const router = express.Router();
const listItems = require("../model/home");
//Danh sách các truyện
router.get("/", function (req, res) {
    res.send(cartItems);
});
function ValidateCart(cart) {
    const schema = Joi.object({
        name: Joi.string().required(),
        price: Joi.number().required(),
    });
    return schema.validate(cart);
}
router.post("/", function (req, res) {
    const { error, value } = ValidateCart(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    else {
        console.log(cartItems);
        let index = cartItems.findIndex((item) => item.name == req.body.name);
        if (index >= 0) cartItems[index].count = parseInt(cartItems[index].count) + 1;
        else {
            const newcartItems = {
                id: cartItems.length + 1,
                count: 1,
                name: req.body.name,
                price: req.body.price,
            };
            cartItems.push(newcartItems);
        }
        let tmp = listItems.findIndex((item) => item.name == req.body.name);
        listItems[tmp].count --;
        res.send(cartItems);
    }
});
router.put("/:id", (req, res) => {
    const { error } = ValidateCart(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let updateIndex = cartItems.findIndex((item) => item.id == req.params.id);
    if (updateIndex == -1) {
        return res.status(400).send("cartItems not found");
    }
    try {
        cartItems[updateIndex].name = req.body.name;
        res.send(cartItems);
    } catch (e) {
        return res.status(500).send("Server error");
    }
});

router.delete("/:id", (req, res) => {
    let deleteIndex = cartItems.findIndex((item) => item.id == req.params.id);
    if (deleteIndex == -1) return res.status(400).send("cartItems not found");
    try {
        cartItems.splice(deleteIndex, 1);
        res.send(cartItems);
    } catch (e) {
        return res.status(500).send("Server error");
    }
});
module.exports = router;
