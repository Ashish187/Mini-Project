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
      var _tag1 = document.createElement('div')
      _tag1.classList.add('pay')
      var create = document.createElement('h3')
      create.classList.add('head2')
      var main = document.createElement('h1')
      main.classList.add('head')
      var image1 = document.createElement('img')
      image1.classList.add('img1')
      var para = document.createElement('p')
      para.classList.add('para1')
      var donate = document.createElement('h3')
      donate.classList.add('head-1')
      var line = document.createElement('div')
      line.classList.add('line')
      var btn = document.createElement('button')
      btn.classList.add('btn-1')
    


      let uname = object.name
      let image = object.photo
      let desc = object.description
      create.innerText = "Help "+`${uname}`
      para.innerText = `${desc}`
      main.innerHTML = "iSupport will not charge any fee on your donation to this campaign"
      btn.innerText = "Donate Now"
      donate.innerHTML = "Donate"
      line.innerText = "Recieve tax benefits by donating to this cause"
      image1.style.background = `url("${image}")`;
      image1.style.backgroundSize="cover";

      let info = "";
      _tag.innerHTML = info;
      // _tag.appendChild(inp)
      _tag1.appendChild(donate)
      _tag1.appendChild(line)
      _tag1.appendChild(btn)
      _tag.appendChild(main)
      _tag.appendChild(create)
      _tag.appendChild(image1)
      _tag.appendChild(para)
      topic.appendChild(_tag)
      topic.appendChild(_tag1)
      const payLink = document.querySelector('.btn-1')
      payLink.addEventListener('click',function(e){
      rzp1.open();
      e.preventDefault();
  })
        
    })
    
  }
  fetchData();
  var options = {
    "key": "rzp_test_70lQ9aNlffkPrZ", // Enter the Key ID generated from the Dashboard
    "amount": "500", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Acme Corp",
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "order_JIvoXC7Pf3mMHM", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response){
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
    },
    "prefill": {
        "name": "Ashish",
        "email": "ashishanand16086@gmail.com",
        "contact": "9999999999"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
var rzp1 = new Razorpay(options);
rzp1.on('payment.failed', function (response){
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
});

