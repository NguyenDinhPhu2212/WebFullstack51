const express = require("express");
const listItems = require("./model/home");
const bodyParser = require("body-parser");
const cartItems = require("./model/cart");
const axios = require("axios");
const app = express();
// const mangaRouter = require('./router/manga');
app.use(express.json());

const cartRouter = require("./router/cart");
app.use("/api/cart", cartRouter);
// parsing to json
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

// paring application/x-www-form
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", "./view"); // quy định file giao diện sẽ được sử dụng
app.set("view engine", "pug"); // quy định template engine là pug
app.get("/cart", (req, res) => {
    res.render("home", { listItems, cartItems });
});
app.post("/cart", async (req, res) => {
    const { body } = req;
    if (Object.keys(body).length > 0) {
        await axios.post("http://localhost:8080/api/cart", body);
    }
    res.render("home", { listItems, cartItems });
});

app.listen(8080, () => console.log("Server dang lang nghe tren cong 8080"));
