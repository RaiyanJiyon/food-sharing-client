import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../utils/firebase.config";
import axios from "axios";
import { use } from "react";

const authContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUserWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const passwordReset = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    };

    const updateUserProfile = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: displayName,
            photoURL: photoURL,
        });
    };

    const authInfo = {
        user,
        setUser,
        createUserWithGoogle,
        createUser,
        loginUser,
        logoutUser,
        passwordReset,
        updateUserProfile,
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('state capture', currentUser?.email);

            if (currentUser?.email) {
                const user = { email: currentUser.email }
                axios.post('https://food-sharing-server-pied.vercel.app/jwt', user, {withCredentials: true})
                .then(res => {
                    console.log('login', res.data)
                    setLoading(false);
                })
            }else {
                axios.post('https://food-sharing-server-pied.vercel.app/logout', {}, {withCredentials: true})
                .then(res => {
                    console.log('logout', res.data);
                    setLoading(false);
                })
            }

        })
        return () => unsubscribe();
    }, []);

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export { AuthProvider, authContext };