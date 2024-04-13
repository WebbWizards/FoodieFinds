import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
      import { 
        getAuth, 
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut
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
                window.location.assign("/home.html");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
            alert(errorMessage);
        });


      });

      signInBtn.addEventListener('click', (e) =>{

        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            alert('Successful sign in!');
            window.location.assign("/home.html");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
          });

      });

      logOutBtn.addEventListener('click', (e) =>{

        signOut(auth).then(() => {
          // Sign-out successful.
          alert('Successful sign out!');
          window.location.assign("/");
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });

      });