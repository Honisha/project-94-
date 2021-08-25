
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBzcRhXFC-JcWksVgTORvXjiKVO52LJB9E",
      authDomain: "kwitter-test-4a3c9.firebaseapp.com",
      databaseURL: "https://kwitter-test-4a3c9-default-rtdb.firebaseio.com",
      projectId: "kwitter-test-4a3c9",
      storageBucket: "kwitter-test-4a3c9.appspot.com",
      messagingSenderId: "608228461412",
      appId: "1:608228461412:web:f0e4f0471dbb4f43c60871"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
    user_name = localStorage.getItem("user_name");
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
