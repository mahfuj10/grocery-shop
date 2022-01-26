import firebaseInitalize from "../Login/Firebase/FirebaseInitalize/FirebaseInitalize"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";


firebaseInitalize();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const googleSign = () => {

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
            }).catch((error) => {
                setError(error.message);

            });
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
    }, [auth])

    return {
        googleSign,
        user,
        error
    };
};

export default useFirebase;