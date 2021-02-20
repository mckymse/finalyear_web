var firebaseConfig = {
    apiKey: "AIzaSyD1CA1VWFRh9X4ZSzb5_j6H3aYys_RQDhk",
    authDomain: "healthcare-b59f8.firebaseapp.com",
    projectId: "healthcare-b59f8",
    storageBucket: "healthcare-b59f8.appspot.com",
    messagingSenderId: "379106516814",
    appId: "1:379106516814:web:2fc02b8ea967587317481f",
    measurementId: "G-5X1H8S8NLD"
  };

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
// var cookies = document.cookie;
// console.log(cookies);

// var user = firebase.auth().currentUser;
// console.log(user);
// if(user != null){
//     email = user.email;
//     console.log(email);
// }

firebase.auth().onAuthStateChanged(function(user){
    if(user){
        console.log(user.email);

        var docRef = db.collection("hosp-cred").doc(user.email);
    docRef.get().then((doc) => {
      if (doc.exists) {
         
          desig= doc.data().designation;
          dept = doc.data().department;
          nam = doc.data().name;

          console.log(desig);
          console.log(dept);
          console.log(nam);

      }else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });


        // var desig= user.data().designation;
        // var dept = user.data().department;
        // var nam = user.data().name;
        // console.log(desig);
        // console.log(dept);
        // console.log(nam);
    }
    else{
        console.log("false");
    }
})

// function read(){
    

//     document.getElementById('test').innerHTML=cookies;
//     document.write(cookies);
// }