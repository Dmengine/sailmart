import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkwmGn8hBJZM7qL-T_L2m5abOvtnd-1Cg",
  authDomain: "sail-mart.firebaseapp.com",
  projectId: "sail-mart",
  storageBucket: "sail-mart.firebasestorage.app",
  messagingSenderId: "419808381344",
  appId: "1:419808381344:web:21dee765a083190db63cc5",
  measurementId: "G-CDFH8HLW25"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app, auth };