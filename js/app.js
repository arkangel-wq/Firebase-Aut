const sign_in_btn = document.querySelector('#sign-in-btn');
const sign_up_btn = document.querySelector('#sign-up-btn');
const container = document.querySelector('.container');

sign_up_btn.addEventListener("click", () => {
    container.classList.add('sign-up-mode');
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove('sign-up-mode');
});

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBzMRmyc2GyujNYtmPgXZg71_q2Ptab9ro",
    authDomain: "usuarios-4d43f.firebaseapp.com",
    projectId: "usuarios-4d43f",
    storageBucket: "usuarios-4d43f.appspot.com",
    messagingSenderId: "413441023202",
    appId: "1:413441023202:web:fe60ff31fc8d1f759792bb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function enviar() {
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    firebase.auth().createUserWithEmailAndPassword(email, pass).then((result) => {
        Swal.fire({
            title: 'Success!',
            text: '¡Se ha registrado exitosamente!',
            icon: 'success',
            confirmButtonText:'Ok'
            });
    })
        .catch(function (error) {
            Swal.fire({
                title: 'Error!',
                text: '¡Comprueba los datos!',
                icon: 'error',
                confirmButtonText: 'Ok'
              });
        });
}
function acceso() {
    var emailA = document.getElementById('emailA').value;
    var passA = document.getElementById('passA').value;
    firebase.auth().signInWithEmailAndPassword(emailA, passA).then((result) => {
        Swal.fire({
            title: 'Success!',
            text: '¡Iniciando Sesion...!',
            icon: 'success',
            confirmButtonText:'Ok'
            }).then((result)=>{
             if(result.value){
              window.location = 'principal.html';
             }
            })
    })
        .catch(function (error) {
            Swal.fire({
                title: 'Error!',
                text: '¡Comprueba los datos!',
                icon: 'error',
                confirmButtonText: 'Ok'
              });
        });
}
 
