import React, { useState, useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ItemCart from "./itemCard";
import ClipLoader from "react-spinners/ClipLoader";
const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [fruitList, setFruitList] = useState(null);
    let [color, setColor] = useState("red");
    useEffect(() => {
        fetch("https://614055eb5cb9280017a11239.mockapi.io/api/v1/card/data")
            .then((response) => {
                return response.json();
            })
            .then((fruit) => {
                console.log(fruit);
                setFruitList(fruit);
                setTimeout(() => {
                    setIsLoading(false);
                }, 2000);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    if (isLoading) {
        return (
            <div>
                <ClipLoader color={color} size={100} />
            </div>
        );
    } else {
        return (
            <div>
                <h1 style={{ paddingTop: "50px" }} className="text-center">
                    My Cart
                </h1>
                <div className="py-4 container">
                    <div className="row justify-content-center">
                        {fruitList.map((item, index) => {
                            return <ItemCart key={index} item={item} />;
                        })}
                    </div>
                </div>
            </div>
        );
    }
};

export default Home;
