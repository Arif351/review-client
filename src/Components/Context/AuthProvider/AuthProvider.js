import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth'
import app from '../../Firebase/firebase.init'

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [customer, setCustomer] = useState([]);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentCustomer => {
            console.log(currentCustomer);
            setCustomer(currentCustomer)
        })
        return () => {
            return unsubscribe();
        }
    }, [])


    const AuthInfo = { createUser, customer, loading }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;