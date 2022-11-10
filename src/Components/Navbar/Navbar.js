import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {

    const { customer, logout } = useContext(AuthContext);

    return (
        <div className="navbar bg-base-content text-white">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">ACC Helper</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li> <Link to='/'>Home</Link> </li>
                    {
                        customer && customer?.uid ?
                            <>
                                <li><Link>My Reviews</Link></li>
                                <li><Link onClick={logout}>Sign Out</Link></li></>
                            :
                            <>
                                <li> <Link to='/login'>Login</Link> </li>
                                <li> <Link to='/signup'>Sign up</Link> </li></>
                    }

                </ul>
            </div>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="w-12 rounded-full">
                        {/* <img src={customer?.photoURL} alt='' /> */}
                        {
                            customer?.photoURL ? <img src={customer?.photoURL} alt='' /> :
                                <FaUserCircle ></FaUserCircle>
                        }
                    </div>
                </label>
            </div>
        </div>
    );
};

export default Navbar;