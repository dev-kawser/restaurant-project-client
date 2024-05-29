/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();

    const axiosPublic = useAxiosPublic()

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleUser = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        console.log();
        setUser(null)
        setLoading(false);
        localStorage.removeItem("access-token")
        return signOut(auth)

    }





    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);

                const userInfo = { email: currentUser.email }

                axiosPublic.post("/jwt", userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem("access-token", res.data.token)
                            setLoading(false);
                        }
                    })
            }
            else {
                setUser(null)
                setLoading(false);
                localStorage.removeItem("access-token")
            }
        });

        return () => unSubscribe()


    }, [axiosPublic])



    const authInfo = {
        registerUser,
        setUser,
        user,
        loginUser,
        loading,
        googleUser,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;