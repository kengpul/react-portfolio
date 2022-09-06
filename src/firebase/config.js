import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDrH0D4rQiptF_QfvnFrW7XX2deyn8hnfQ",
    authDomain: "pulgareskingpaul.firebaseapp.com",
    projectId: "pulgareskingpaul",
    storageBucket: "pulgareskingpaul.appspot.com",
    messagingSenderId: "666953684147",
    appId: "1:666953684147:web:07e5a7915e93cabffaccc6"
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

const db = getFirestore(app);

export { storage, db };