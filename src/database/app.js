  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBWGg5EWeYFgccd1eqO9YCz407bueDUu6Y",
    authDomain: "proffy-nlw2.firebaseapp.com",
    databaseURL: "https://proffy-nlw2.firebaseio.com",
    projectId: "proffy-nlw2",
    storageBucket: "proffy-nlw2.appspot.com",
    messagingSenderId: "250891418825",
    appId: "1:250891418825:web:c1b96ff47ed3c06475e118",
    measurementId: "G-1NLB6H2M2F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebase.firestore()