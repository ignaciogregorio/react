
    import {initializeApp} from "firebase/app";
    import { getFirestore } from "firebase/firestore";

    const firebaseConfig = {

        apiKey: "AIzaSyBX8DWEm4wVignWfdLHHyPzhQGGwtaA9Yo",
        authDomain: "peaky-wines-ecommerce.firebaseapp.com",
        projectId: "peaky-wines-ecommerce",
        storageBucket: "peaky-wines-ecommerce.appspot.com",
        messagingSenderId: "868954809170",
        appId: "1:868954809170:web:6852461673dff340b3908b"
    };

    const app = initializeApp(firebaseConfig);

    export const getFirebase = () => app;

    export { getFirestore };