
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDmeoFDlnZmlPJLpbN0P3V5-WYUUjaaTZ8",
      authDomain: "kwitter-bc315.firebaseapp.com",
      projectId: "kwitter-bc315",
      storageBucket: "kwitter-bc315.appspot.com",
      messagingSenderId: "208912682539",
      appId: "1:208912682539:web:4dcac2e18c3eb5b352646e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
