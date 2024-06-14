// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAAN0dvUXjQoPDtfKmbR1ix0ivOTfaOP70',
	authDomain: 'hobin-blog.firebaseapp.com',
	databaseURL: 'https://hobin-blog-default-rtdb.asia-southeast1.firebasedatabase.app',
	projectId: 'hobin-blog',
	storageBucket: 'hobin-blog.appspot.com',
	messagingSenderId: '490623919180',
	appId: '1:490623919180:web:b259af088cb8023c6b00e9',
	measurementId: 'G-447T6PR5W2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };