// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDHDRQAFLPgbPCb_zPKLchiTuMVDQgqzr0",
    authDomain: "auto-vent-projects.firebaseapp.com",
    projectId: "auto-vent-projects",
    storageBucket: "auto-vent-projects.appspot.com",
    messagingSenderId: "921190146576",
    appId: "1:921190146576:web:97ebb3353fd89fe9516095",
    measurementId: "G-NZNH20J9G3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;