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
      var raise = document.createElement('div')
      raise.classList.add('raise')
      var create = document.createElement('div')
      create.classList.add('create')
      var progress = document.createElement('div')
      progress.classList.add('progress')

      var circleWrap = document.createElement('div')
      circleWrap.classList.add('circle-wrap')
      
      var circle = document.createElement('div')
      circle.classList.add('circle')

      var maskFull = document.createElement('div')
      maskFull.classList.add('mask')
      maskFull.classList.add('full')

      var fill = document.createElement('div')
      fill.classList.add('fill')

      var maskHalf = document.createElement('div')
      maskHalf.classList.add('mask')
      maskHalf.classList.add('half')

      var fill1 = document.createElement('div')
      fill1.classList.add('fill')

      var insideCircle = document.createElement('div')
      insideCircle.classList.add('inside-circle')

      var money = document.createElement('div')
      money.classList.add('money')
      var line = document.createElement('div')
      line.classList.add('line')

      // let childObjectKeys = Object.keys(object[arr[i]]);
      
      let image = object[arr[i]].photo;
      let uname = object[arr[i]].name
      let umoney = object[arr[i]].money
      let updateMoney = object[arr[i]].updateMoney
      let newmoney = umoney;
      let x=updateMoney/500;
      let y=100/x;
      console.log(image)
      let c=0;
      if(newmoney>0){
        while (newmoney!=updateMoney && newmoney>0) {
          newmoney=newmoney+500
          c++;
        }
        money.innerHTML = "Raised "+`${umoney}`
        let n=y*c
        let m=n.toFixed(1)
            insideCircle.innerHTML = `${m}%`
      }
      
      if(umoney<=0){
        money.innerHTML = "Raised "+`${0}`
        insideCircle.innerHTML = `${100}%`
        // firebase.database().ref(`details/${pageName}`).remove()
      }
      image1.style.background = `url("${image}")`;
      image1.style.backgroundSize="cover";
      _tag.setAttribute("href",`/donatePage/${arr[i]}`)
      main.innerHTML = "Save Lives against the COVID-19 second wave"
      create.innerText = "Created By\n"+`${uname}`
      // money.innerHTML = "Raised "+`${umoney}`
      // insideCircle.innerHTML = "75%"
      line.innerText = "Recieve tax benefits by donating to this cause"
      
      let info = "";
      // childObjectKeys.forEach(key => {
      //     image = object[arr[i]]
      //     info+=object[arr[i]][key];
      // });
      _tag.innerHTML = info;
      _tag.appendChild(image1)
      _tag.appendChild(main)
      _tag.appendChild(raise)
      
      circleWrap.appendChild(circle)
      circle.appendChild(maskFull)
      maskFull.appendChild(fill)
      circle.appendChild(maskHalf)
      circle.appendChild(insideCircle)
      maskHalf.appendChild(fill1)
      progress.appendChild(circleWrap)
      progress.appendChild(money)
      raise.appendChild(create)
      raise.appendChild(progress)
      _tag.appendChild(line)
      topic.appendChild(_tag)

    }
    })
  }
  fetchData();
