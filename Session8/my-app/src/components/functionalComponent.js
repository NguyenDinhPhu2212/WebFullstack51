import React from "react";
const functionalComponent = function (props) {
    return (
        <div>
            <h1 className={"hello"}>Hello</h1>
            <h3>{props.name}</h3>
            <h3>
                {props.family.map((value, key) => {
                    return <h5 key={key}>{value}</h5>;
                })}
            </h3>
        </div>
    );
};
export default functionalComponent;
