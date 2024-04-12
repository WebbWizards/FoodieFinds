import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
      import { 
        getAuth, 
        createUserWithEmailAndPassword,
        signOut, 
        signInAnonymously, 
        setPersistence, 
        browserLocalPersistence, 
        onAuthStateChanged 
      } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
      import firebaseConfig from "./firebaseConfig.js";

      const app = initializeApp(firebaseConfig);

      const auth = getAuth();

      signUpBtn.addEventListener('click', (e) =>{

        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // Add redirect here???
                alert('User created!');

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
            alert(errorMessage);
        });


      });