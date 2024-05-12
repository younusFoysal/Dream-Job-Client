import React, {createContext, useEffect, useState} from 'react';
import PropTypes from "prop-types";
import auth from "../firebase/firebase.config.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth"
import axios from "axios";



export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    //observe user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };

            setUser(currentUser);
            setLoading(false)
            console.log("Current User: ", currentUser)

            // if user exists then issue a token
            if (currentUser){

                axios.post( 'http://localhost:5000/jwt', loggedUser, { withCredentials: true})
                    .then(res => {
                        console.log('Token response: ', res.data)
                    })
            }else {
                axios.post('http://localhost:5000/logout', loggedUser, { withCredentials: true})
                    .then(res => {
                        console.log(res.data)
                    })
            }
        });
        return () => {
            unSubscribe();
        }
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        logOut
    }







    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.proptypes ={
    children: PropTypes.node
}