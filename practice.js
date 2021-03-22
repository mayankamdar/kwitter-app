
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBPK7_-np_8zNIuEZWrk47gsIFNMKX_kQc",
    authDomain: "kwitter-b37c4.firebaseapp.com",
    databaseURL: "https://kwitter-b37c4-default-rtdb.firebaseio.com",
    projectId: "kwitter-b37c4",
    storageBucket: "kwitter-b37c4.appspot.com",
    messagingSenderId: "39732279873",
    appId: "1:39732279873:web:6217fa9d701dc2c7eaa4c0",
    measurementId: "G-CDDL9VXC9K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"to say hi to the world"
      });
  }