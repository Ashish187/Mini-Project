 var firebaseConfig = {
    apiKey: "AIzaSyCSKrvjJksd-jjW-7Hdsekgu5CnjDM_J7A",
    authDomain: "userdetails-6f435.firebaseapp.com",
    databaseURL: "https://userdetails-6f435-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "userdetails-6f435",
    storageBucket: "userdetails-6f435.appspot.com",
    messagingSenderId: "12992489187",
    appId: "1:12992489187:web:81dcbf0e2687a5e43a07d6"
  };

  firebase.initializeApp(firebaseConfig);

 

  document.querySelector("#register").addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();
  
    var name = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var cause = document.querySelector('#cause').value;
    var phone = document.querySelector('#phone').value;
    var tag = document.querySelector('#tag').value;
    var description = document.querySelector('#description').value;
    var photo = document.querySelector('#photo').value;
    console.log(name, cause, email, phone, tag, description, photo);
  
    saveDetails(name, cause, email, phone, tag, description, photo);

    firebase.auth().currentUser.sendEmailVerification()
    .then(() => {
      
    });
  
    document.querySelector("#register").reset();
  }

  let info = firebase.database().ref("details/"+name);
  

function saveDetails(name, cause, email, phone, tag, description, photo) {
    let newInfo = info.push();

    const ref = firebase.storage().ref()

    const file = document.querySelector("#photo").files[0]

    const fileName = new Date() + '-' + file.name

    const metadata = {
      contentType: file.type
    }

    const uploadTask = ref.child(fileName).put(file);

    uploadTask.on('state_changed', 
  (snapshot) => {
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: 
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING:
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
      console.log('File available at', downloadURL);
      newInfo.set({
        name: name,
        cause: cause,
        email: email,
        phone: phone,
        tag: tag,
        description: description,
        photo: downloadURL,
    });
    });
  }
);

}
