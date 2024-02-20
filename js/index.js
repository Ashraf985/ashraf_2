const firebaseConfig = {
  apiKey: "AIzaSyCaXM1OdrFqKAAOmxZ01CHcGA4rj1J2zJ0",
  authDomain: "ashraf-baec8.firebaseapp.com",
  projectId: "ashraf-baec8",
  storageBucket: "ashraf-baec8.appspot.com",
  messagingSenderId: "977221994149",
  appId: "1:977221994149:web:bca6e275b27996e1b46f4c"
};
firebase.initializeApp(firebaseConfig);
// Get a reference to  RealTime Database service
const database = firebase.database();

let login     = document.getElementById("login")
let signUp    = document.querySelector(".signUp")
let loteFile  = document.querySelector(".loteFile")
let myform    = document.querySelector(".myform")
let body      = document.querySelector("body")
let regester  = document.querySelector(".regester")
let loading   = document.querySelector(".loading")
let loginpage = document.querySelector(".loginpage")


const correct = document.querySelector('.correct')
const close  = document.querySelector('.close')
const Message = document.querySelector('.error-message')


// button log in to redirect page adding room
loginpage.addEventListener("click", (e) => {
  e.preventDefault();
  const email = myform.email.value;
  const password = myform.password.value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {

      myform.email.value = '';
      myform.password.value = '';


      window.location.href = "Pages/AddNewRooms.html";
    })
    .catch((error) => {

      const errorCode = error.code;
    
      const errorMessage = error.message

      Message.innerHTML = errorMessage
      correct.style.transform = 'scale(1)'
    });
});






close.addEventListener('click', (e) => {
  e.preventDefault()
  correct.style.transform = 'scale(0)'
})