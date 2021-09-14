import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const ItemCart = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const [select, setSelect] = useState(0);

    const onHandleClick = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setSelect(select + 1);
        }, 2000);
    };
    let { item } = props;
    return (
        <div className="col-12 col-md-6 col-lg-3 mx-0">
            <div className="card p-0 overflow-hidden shadow">
                <img
                    src={item.url}
                    className="card-img-top img-fluid"
                    alt="..."
                />
                <div className="card-body">
                    <h4 className="card-title">{item.name}</h4>
                    <h5 className="card-title">${item.price}/1KG</h5>
                    <h5 className="card-text">{item.description}</h5>
                    <button className="btn btn-success" onClick={onHandleClick}>
                        Add to card
                    </button>
                </div>
            </div>
            <div className="cart shadow">
                <h5>{item.name}</h5>
                <div>
                    Số lượng :{" "}
                    {isLoading ? (
                        <ClipLoader size={10} color={"red"} />
                    ) : (
                        select
                    )}{" "}
                    Kilograms
                </div>
                <div>
                    Tổng:{" "}
                    {isLoading ? (
                        <ClipLoader size={10} color={"red"} />
                    ) : (
                        "$" + select * item.price
                    )}
                </div>
            </div>
        </div>
    );
};

export default ItemCart;
