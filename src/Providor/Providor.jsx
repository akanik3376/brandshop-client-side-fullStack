/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth";
import app from "../firebase.config";
import { createContext, useEffect, useState, } from "react";


export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



    // google login
    const provider = new GoogleAuthProvider();
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)

    }

    //  create user
    const createUser = (email, password) => {
        setLoading(true)

        return createUserWithEmailAndPassword(auth, email, password)

    }

    // signIn user
    const signInUser = (email, password) => {
        setLoading(true)

        return signInWithEmailAndPassword(auth, email, password)

    }

    // logout user
    const logOutUser = () => {
        setLoading(true)

        return signOut(auth)
        // .then(() => {
        //     // Sign-out successful.
        // }).catch((error) => {
        //     console.log(error)
        // });
    }

    useEffect(() => {
        const unSubscrib = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscrib()
        }
    }, [])



    const userInfo = {
        user,
        loading,
        googleLogin,
        createUser,
        signInUser,
        logOutUser
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;