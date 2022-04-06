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
    firebase.database().ref(`details/${pageName}`).once("value",(snapshot)=>{
      console.log(snapshot.val());
      let object = snapshot.val();
      var topic = document.querySelector('.donate-grid')
      var _tag = document.createElement('div')
      _tag.classList.add('donate-1')
      // var inp = document.createElement('input')
      // inp.setAttribute("type","hidden")
      // inp.setAttribute("value","<%=pageName%>")
      // inp.classList.add('page')
      var create = document.createElement('h3')
      create.classList.add('head2')
      var main = document.createElement('h1')
      main.classList.add('head')
      var image1 = document.createElement('img')
      image1.classList.add('img1')
      var para = document.createElement('p')
      para.classList.add('para1')

      let uname = object.name
      let image = object.photo
      let desc = object.description
      create.innerText = "Help "+`${uname}`
      para.innerText = `${desc}`
      main.innerHTML = "iSupport will not charge any fee on your donation to this campaign"
      image1.style.background = `url("${image}")`;
      image1.style.backgroundSize="cover";

      let info = "";
      _tag.innerHTML = info;
      // _tag.appendChild(inp)
      _tag.appendChild(main)
      _tag.appendChild(create)
      _tag.appendChild(image1)
      _tag.appendChild(para)
      topic.appendChild(_tag)

    })
    
  }
  fetchData();