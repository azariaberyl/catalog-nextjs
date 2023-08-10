// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCuPeJexWyugXXxPXhauRM4IjZoqF8Dlrg',
  authDomain: 'catalog-1e72c.firebaseapp.com',
  projectId: 'catalog-1e72c',
  storageBucket: 'catalog-1e72c.appspot.com',
  messagingSenderId: '108785002057',
  appId: '1:108785002057:web:260fb505e7340cc510c198',
  measurementId: 'G-1L5WQTEQX5',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
