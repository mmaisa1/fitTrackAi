import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAKPh9WICcwZOwT-EMU6zpiXz5q3uyr26s",
    authDomain: "fittrackai-bb34a.firebaseapp.com",
    projectId: "fittrackai-bb34a",
    storageBucket: "fittrackai-bb34a.firebasestorage.app",
    messagingSenderId: "1001098153522",
    appId: "1:1001098153522:web:757e5f47b6bd34af0ff62b"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };