

const firebaseConfig = {
    apiKey: "AIzaSyA2pmFqInXcUgtSWd9soBQFvknWOttRj64",
    authDomain: "chatter-8ec55.firebaseapp.com",
    databaseURL: "https://chatter-8ec55-default-rtdb.firebaseio.com",
    projectId: "chatter-8ec55",
    storageBucket: "chatter-8ec55.appspot.com",
    messagingSenderId: "706279454265",
    appId: "1:706279454265:web:c304adedb7a2f011773fe8",
    measurementId: "G-W38G6NNGRP"

  };
  firebase.initializeApp(firebaseConfig)
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
 
    });});}
getData();
