import firebase from 'firebase/app';
import 'firebase/functions';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FiREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FiREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FiREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FiREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FiREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FiREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(firebaseConfig);

export const sendOrder = (order) => {
  return new Promise((resolve, reject) => {
    firebase.functions().httpsCallable('sendOrder')(order)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.log('error sending order', err);
        reject(err);
      });
  })
}
// firebase login
// firebase init
// firebase deploy
