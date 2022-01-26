import { initializeApp } from "firebase/app";
import firebaseConfig from "../FirebaeConfig/FirebaeConfig";

// Initialize Firebase

const firebaseInitalize = () => {
    initializeApp(firebaseConfig);
};
export default firebaseInitalize;