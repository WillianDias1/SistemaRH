const { initializeApp } = require ('firebase/app');
const { getAuth, onAuthStateChanged } = require ('firebase/auth');

//Conexão com o Banco de Dados Firebase
const firebase = initializeApp({
    apiKey: "AIzaSyBLP1e9PBXxRa6pcEH_c1eBafbxWN8YR6E",
    authDomain: "rh-sistema.firebaseapp.com",
    projectId: "rh-sistema",
    storageBucket: "rh-sistema.appspot.com",
    messagingSenderId: "1069518567735",
    appId: "1:1069518567735:web:939862ca7ba0fa242242b2",
    measurementId: "G-7L4ZDTJ483"
});

const auth = getAuth('express');

onAuthStateChanged(auth, user =>{
    if(user != null){
        console.log('logged in!');
    } else{
        console.log('No user');
    }
});