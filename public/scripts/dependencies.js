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

var db = firebase.firestore();


function signin(){
  var email = document.getElementById('id').value;
  var pwd = document.getElementById('pwd').value;
  var desig;
  var dept;

  firebase.auth().signInWithEmailAndPassword(email, pwd)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;


    console.log(user);

    //firestore read data
    var docRef = db.collection("hosp-cred").doc(email);
    docRef.get().then((doc) => {
      if (doc.exists) {
          console.log("Document data:", doc.data());
          desig= doc.data().designation;
          dept = doc.data().department;
          nam = doc.data().name;

          console.log(desig);
          console.log(dept);
          console.log(nam);


          if(desig == 'DOCTOR'){
            
            

            //window.location('doctor.html');
            window.location.href = "doctor.html"

          }
          else if(desig == 'PHARMACIST'){

          }
          else{

          }
         
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
      }).catch((error) => {
          console.log("Error getting document:", error);
      });


    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });


}

