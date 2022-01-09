import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import{getDatabase, set,ref} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
  import { getFirestore, doc, getDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
  import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js" ;
  const firebaseConfig = {
    apiKey: "AIzaSyCvs7Gm3b3Fq3P-QNdM04fldb7AGrpk2cY",
    authDomain: "jsio2-60a21.firebaseapp.com",
    databaseURL: "https://jsio2-60a21-default-rtdb.firebaseio.com",
    projectId: "jsio2-60a21",
    storageBucket: "jsio2-60a21.appspot.com",
    messagingSenderId: "902806665542",
    appId: "1:902806665542:web:1b8a56321359e5cf9ccd47",
    measurementId: "G-954Y304SF9"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

signup.addEventListener('click', (e)=>{
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let username = document.getElementById('user').value;


createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    set(ref(database, 'user/' + user.uid),{
      username: username ,
      email:email
    })
    alert('user created');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage)
  });
})