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
    var money = document.querySelector('#money').value;
    var updateMoney = document.querySelector('#money1').value;
    var description = document.querySelector('#description').value;
    var photo = document.querySelector('#photo').value;
    console.log(name, cause, email, phone, tag, money,updateMoney, description, photo);
    if(money<=2000){
      alert("Amount should be greater than 2000")
    }

    if(money!=updateMoney){
      alert("Please write the right amount")
    }
    
    else{
      saveDetails(name, cause, email, phone, tag, money,updateMoney,  description, photo);
      document.querySelector("#register").reset();
      alert("Successfully Submitted")
    }
    
  }

 
  

function saveDetails(name, cause, email, phone, tag, money,updateMoney,  description, photo) {
   let info = firebase.database().ref("details/");
    let newInfo = info.push().key;

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
      info.child(newInfo).set({
        name: name,
        cause: cause,
        id:newInfo,
        email: email,
        phone: phone,
        tag: tag,
        money: money,
        updateMoney: updateMoney,
        description: description,
        photo: downloadURL,
    });
    });
  }
);

}
