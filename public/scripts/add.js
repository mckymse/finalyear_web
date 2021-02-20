var firebaseConfig = {
    apiKey: "AIzaSyD1CA1VWFRh9X4ZSzb5_j6H3aYys_RQDhk",
    authDomain: "healthcare-b59f8.firebaseapp.com",
    projectId: "healthcare-b59f8",
    storageBucket: "healthcare-b59f8.appspot.com",
    messagingSenderId: "379106516814",
    appId: "1:379106516814:web:2fc02b8ea967587317481f",
    measurementId: "G-5X1H8S8NLD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  //initialize firestore
  var db = firebase.firestore();


  function signup(){

    var Dname = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('pwd').value;
    var Designation = document.getElementById('category').value;
    var Department = document.getElementById('department').value;
    console.log(Dname);
    console.log(email);
    console.log(password);
    console.log(Designation);
    console.log(Department);
    firebase.auth().createUserWithEmailAndPassword(email,password).catch(function(error){
        console.log(error.code);
        console.log(error.message);
        //window.location.replace('https://healthcare-b59f8.web.app/users_add.html');
    });
    db.collection("hosp-cred").doc(email).set({
        name: Dname,
        designation: Designation,
        department: Department
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
    //window.location.replace('https://healthcare-b59f8.web.app/users_add.html');
    // console.log("line1");
    // firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error){
    //     console.log(error.code);
    //     console.log(error.message);
    //     alert(error.message);
    //     window.location.replace('users_add.html');
    // });
    // console.log("line2");
    // db.collection("hosp-credentials").doc(email).set({
    //     name: name,
    //     occupation: designation,
    //     department: department
    // })
    // .then(() => {
    //     console.log("Document successfully written!");
    // })
    // .catch((error) => {
    //     console.error("Error writing document: ",error);
    // });
    // window.location.replace('users_add.html');


    

      
  }

  // Add a new document in collection "cities"
    // db.collection("hosp-crendentials").doc("LA").set({
    //     name: "Los Angeles",
    //     state: "CA",
    //     country: "USA"
    // })
    // .then(() => {
    //     console.log("Document successfully written!");
    // })
    // .catch((error) => {
    //     console.error("Error writing document: ", error);
    // });