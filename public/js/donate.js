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


  
  function fetchData(){
    firebase.database().ref("details/").once("value",function(snapshot){
      let c=0
      snapshot.forEach((childSnapshot)=>{
        c++;
        // console.log(childSnapshot.)
     })
     
     let object = snapshot.val();
    let arr = Object.keys(snapshot.val())
    for(let i=0;i<arr.length;i++){
      var topic = document.querySelector('.campaign-list')
      var _tag = document.createElement('a')
      _tag.classList.add('campaign-list-card')
      var image1 = document.createElement('div')
      image1.classList.add('img1')
      var main = document.createElement('div')
      main.classList.add('topic')
      var create = document.createElement('div')
      create.classList.add('create')
      var line = document.createElement('div')
      line.classList.add('line')
      
      // let childObjectKeys = Object.keys(object[arr[i]]);
      
      let image = object[arr[i]].photo;
      let uname = object[arr[i]].name
      
      console.log(image)
      
      image1.style.background = `url("${image}")`;
      image1.style.backgroundSize="cover";
      _tag.setAttribute("href",`/donatePage/${arr[i]}`)
      main.innerHTML = "Save Lives against the COVID-19 second wave"
      create.innerText = "Created By\n"+`${uname}`
      line.innerText = "Recieve tax benefits by donating to this cause"
      
      let info = "";
      // childObjectKeys.forEach(key => {
      //     image = object[arr[i]]
      //     info+=object[arr[i]][key];
      // });
      _tag.innerHTML = info;
      _tag.appendChild(image1)
      _tag.appendChild(main)
      _tag.appendChild(create)
      _tag.appendChild(line)
      topic.appendChild(_tag)
      // console.log(arr[i].photo)
    }

  
    })
  }
  fetchData();
