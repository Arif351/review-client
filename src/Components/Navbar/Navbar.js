import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Navbar = () => {
    const { customer, logout } = useContext(AuthContext);

    return (
        <div className="navbar bg-base-content text-white">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">ACC Helper</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li> <Link to='/home'>Home</Link> </li>
                    {
                        customer && customer?.uid ?
                            <li><Link onClick={logout}>Sign Out</Link></li>
                            :
                            <>
                                <li> <Link to='/login'>Login</Link> </li>
                                <li> <Link to='/signup'>Sign up</Link> </li></>
                    }

                </ul>
            </div>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" alt='' />
                    </div>
                </label>
            </div>
        </div>
    );
};

export default Navbar;