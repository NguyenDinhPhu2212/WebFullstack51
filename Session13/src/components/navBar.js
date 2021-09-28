import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul className="flex justify-center mb-10 mt-10 text-gray-700 font-semibold">
                <li className="mr-10">
                    <Link to="/home">Home</Link>
                </li>
                <li className="ml-10">
                    <Link to="/cart">Cart</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;