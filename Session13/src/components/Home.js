import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
const FruitListContext = React.createContext();

const baseUrl = "https://614055eb5cb9280017a11239.mockapi.io/api/v1/card/data";
const Home = ({addToCart}) => {
    const [fruitList, setFruitList] = useState(null);
    useEffect(() => {
        axios.get(baseUrl).then((response) => {
            setFruitList(response.data);
        });
    }, []);
    if (!fruitList) return null;
    return (
        /* B2. Khởi tạo provider ở component Cha */
        <FruitListContext.Provider value={{ addToCart, fruitList }}>
            <FruitList />
        </FruitListContext.Provider>
    );
};
const FruitList = () => {
    const { fruitList } = useContext(FruitListContext);
    return (
        <div className="flex flex-wrap -mx-2 justify-center mt-20">
            {fruitList.map((fruit) => {
                return <FruitCard key={fruit.id} {...fruit} />;
            })}
        </div>
    );
};
const FruitCard = (props) => {
    const { addToCart } = useContext(FruitListContext);
    return (
        <div className="w-1/5 rounded overflow-hidden shadow-lg px-2 mb-10 ml-10 mr-10">
            <img className="w-full h-64 object-cover" src={props.url} alt="Card image" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.name}</div>
                <p className="text-gray-700 text-base">
                    Price: ${props.price}/1kg
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Detail
                </span>
                <span
                    onClick={() => addToCart(props)}
                    className="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer"
                >
                    Add to Cart
                </span>
            </div>
        </div>
    );
};
export default Home;
