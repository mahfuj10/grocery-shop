import firebaseInitalize from "../Login/Firebase/FirebaseInitalize/FirebaseInitalize"
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { firebaseLoad, saveUser } from "../../../Redux/reducer/cartSlice";


firebaseInitalize();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const dispatch = useDispatch();
    const [loading, setLoaing] = useState(true);
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    // google sign
    const googleSign = (navigate, location) => {
        setLoaing(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                saveUserToDb(result.user, 'PUT');
                const destination = location?.state?.from || '/dashboard';
                navigate(destination);
            }).catch((error) => {
                setError('');
            })
            .finally(() => setLoaing(false));
    };

    // create user email and password

    const registerUser = (name, email, password, navigate, location) => {
        setLoaing(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                //update user profile
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: "https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png"
                });
                saveUserToDb(user, 'POST');
                const destination = location?.state?.from || '/dashboard';
                navigate(destination);
            })
            .catch((error) => {
                // setError(error.message);
                const message = error.message;
                if (message.includes('auth/invalid-email')) {
                    setError('Wrong email. Please Provide valid email.')
                }
                if (message.includes('Password should be at least 6')) {
                    setError('Password should be 6 characters.')
                }
            })
            .finally(() => setLoaing(false));
    };


    // login user
    const userLogin = (email, password, location, navigate) => {
        setLoaing(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const destination = location?.state?.from || '/dashboard';
                navigate(destination);
                setUser(user);
            })
            .catch((error) => {
                const message = error.message;
                if (message.includes('auth/invalid-email')) {
                    setError('Wrong email. Please Provide valid email.')
                }
                if (message.includes('auth/wrong-password')) {
                    setError('Wrong Password');
                }

            })
            .finally(() => setLoaing(false));
    }


    // log out method

    const handaleLogOut = () => {
        setLoaing(true);
        signOut(auth)
            .then(() => {
                setUser({});
                setError("");
            })

            .catch(error => {
                setError(error.message);
            })
            .finally(() => setLoaing(false));

    }



    // state changed
    useEffect(() => {
        setLoaing(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                dispatch(saveUser(user))
            } else {
                setUser({});
                dispatch(saveUser({}))
            }
            setLoaing(false)
        });
    }, [auth])



    const saveUserToDb = (user, method) => {
        const userData = { name: user.displayName, email: user.email, userId: user.uid, number: null, address: null, image: user.photoURL }
        fetch('https://secret-island-26493.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then()
    };

    useEffect(() => {
        dispatch(firebaseLoad(loading));
    }, [dispatch,])

    return {
        googleSign,
        user,
        loading,
        error,
        registerUser,
        handaleLogOut,
        userLogin
    };
};

export default useFirebase;