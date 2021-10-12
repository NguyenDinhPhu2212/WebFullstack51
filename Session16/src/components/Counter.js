import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, reset } from "../actions";

const Counter = () => {
    // 1. Lấy dữ liệu từ global state bằng cách sử dụng useSelector (tương ứng với mapStateToProps)
    const data = useSelector((state) => {
        console.log('globalState', state);
        return state.counter
    })

    // 2. Lấy hành động từ actions bằng useDispatch (tương ứng với mapDispatchToProps)
    const dispatch = useDispatch();
    return (
        <div>
            <div>{data}</div>
            <button onClick={() => dispatch(decrease())}>Decrease</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(increase())}>Increase</button>
        </div>
    );

}

export default Counter;