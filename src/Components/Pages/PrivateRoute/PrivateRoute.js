import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { customer, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <button className="btn loading">loading</button>
    }
    if (customer && customer?.uid) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }}></Navigate>


};

export default PrivateRoute;