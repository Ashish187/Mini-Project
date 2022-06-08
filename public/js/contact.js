const firebaseConfig = {
    apiKey: "AIzaSyCpWPMHBxQea-_Gggrx1xXO7Tza9jUjVM4",
    authDomain: "suggestion-59003.firebaseapp.com",
    databaseURL: "https://suggestion-59003-default-rtdb.firebaseio.com",
    projectId: "suggestion-59003",
    storageBucket: "suggestion-59003.appspot.com",
    messagingSenderId: "973565254366",
    appId: "1:973565254366:web:7734b0a1346b0d5d7f404f"
  };

  firebase.initializeApp(firebaseConfig);

  document.querySelector('#form-container').addEventListener("submit",submitForm)

  function submitForm(e){
      e.preventDefault()

      var name = document.querySelector('#name').value
      var email = document.querySelector('#email').value
      var msg = document.querySelector('#msg').value

      saveDetails(name, email,msg);
      document.querySelector("#form-container").reset();
      alert("Successfully Submitted")
  }

  function saveDetails(name, email,msg){
    let info = firebase.database().ref("Queries/");
    let newInfo = info.push().key;

    info.child(newInfo).set({
        name: name,
        email: email,
        msg: msg,
    });
  }

