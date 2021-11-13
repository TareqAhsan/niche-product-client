import React, { createContext } from 'react';
import useProducts from '../../hooks/useProducts';
import useFirebase from '../../hooks/useFirebase'
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const {products} = useProducts()
    const allContext = useFirebase()
    const data = {products,allContext}
    return (
        <AuthContext.Provider value={data}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;