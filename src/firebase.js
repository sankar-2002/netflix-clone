import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCOImSx_5hX776ELcwP3y903_gv5m9SZ24",
    authDomain: "netflix-clone-fe9cf.firebaseapp.com",
    projectId: "netflix-clone-fe9cf",
    storageBucket: "netflix-clone-fe9cf.appspot.com",
    messagingSenderId: "926016920984",
    appId: "1:926016920984:web:54b987d59ed3a986e0dfed"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;