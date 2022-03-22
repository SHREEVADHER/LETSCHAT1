const firebaseConfig = {
    apiKey: "AIzaSyBLwvkW5ydrAx-nS7AaXvDqqgZT_ct-oVw",
    authDomain: "kwitter-4cb1b.firebaseapp.com",
    databaseURL: "https://kwitter-4cb1b-default-rtdb.firebaseio.com",
    projectId: "kwitter-4cb1b",
    storageBucket: "kwitter-4cb1b.appspot.com",
    messagingSenderId: "893554245942",
    appId: "1:893554245942:web:40919a569b028f0222f397",
    measurementId: "G-SJ467L5G7K"
  };
  
 
  const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    
    });});}
getData();