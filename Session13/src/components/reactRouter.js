import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./navBar";
import Cart from "./Cart";
import Home from "./Home";

const ReactRouter = () => {
    const [cart, setCart] = useState([]);
    const addToCart = (newItem) => {
        const newitem = { ...newItem };
        setCart((cart) => {
            let index = cart.findIndex((item) => {
                return item.id == newitem.id;
            });
            if (index > -1) {
                cart[index].count++;
            } else {
                newitem.count = 1;
                cart.push(newitem);
            }
            return cart;
        });
        console.log(cart);
    };
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/home">
                    <Home addToCart={addToCart}/>
                </Route>
                <Route path="/cart">
                    <Cart cart={cart}/>
                </Route>
            </Switch>
        </Router>
    );
};

export default ReactRouter;
