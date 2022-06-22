// var nodemailer = require('nodemailer');


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

    firebase.database().ref(`details/${pageName}`).on("value",(snapshot)=>{
      console.log(snapshot.val());
      let object = snapshot.val();
      var topic = document.querySelector('.donate-grid')
      topic.innerHTML="";
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
      var progress = document.createElement('div')
      progress.classList.add('progress')

      var download = document.createElement('div')
      download.classList.add('download')

      var share = document.createElement('a')
      share.classList.add('share')

      var person = document.createElement('div')
      person.classList.add('person')

      var story = document.createElement('div')
      story.classList.add('story')

      // const whatsappBtn = document.querySelector(".share");

      function init(){
        let postUrl = encodeURI(document.location.href);
      let postTitle = encodeURI("Hi everyone, please check this out: ");

      share.setAttribute(
        "href",
        `https://wa.me/?text=${postTitle} ${postUrl}`,'_blank'
      );
      // window.open(`https://wa.me/?text=${postTitle} ${postUrl}`,'_blank')
      }
      init()

      // download.setAttribute("href",)

      var dcertificate = document.createElement('a')
      dcertificate.classList.add('dcert')

      // share.setAttribute('href',"#")
      

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

      var divmoney = document.createElement('div')
      divmoney.classList.add('money')


      let name = object.name
      let photo = object.photo
      let certificate = object.certificate
      console.log(photo);
      console.log(certificate);

      dcertificate.setAttribute('href',certificate)
      // dcertificate.setAttribute('download',"download")
      let description = object.description
      let tag = object.tag
      let cause = object.cause
      let city = object.city
      let state = object.state
      let money = object.money
      let updateMoney = object.updateMoney
      let phone = object.phone
      let email = object.email
      let newmoney = money;
      // console.log(newmoney);
      // console.log(updateMoney);
      let x=updateMoney/500;
      let y=100/x;
      create.innerText = "Help "+`${name}`
      para.innerText = `${description}`
      main.innerHTML = "iSupport will not charge any fee on your donation to this campaign"
      share.innerText = "Share"
      dcertificate.innerText = "Download Medical Certificate"
      person.innerText = `The fundraiser will benefit ${name} from ${city},${state}`
      story.innerText = "Story"
      btn.innerText = "Donate Now"
      donate.innerHTML = "Donate"
      line.innerText = "Recieve tax benefits by donating to this cause"
      
      image1.style.background = `url("${photo}")`;
      image1.style.backgroundSize="cover";

      
      let c=0;
      if(newmoney>0){
        while (newmoney!=updateMoney && newmoney>0) {
          newmoney=newmoney+500
          c++;
        }
        divmoney.innerHTML = "Raised\n"+`of Rs.${money}`
        let n=y*c
        let m=n.toFixed(1)
            insideCircle.innerHTML = `${m}%`
      }
      
      if(money<=0){
        divmoney.innerHTML = "Raised\n"+`of Rs.${0}`
        insideCircle.innerHTML = `${100}%`
        firebase.database().ref(`details/${pageName}`).remove()
      }
      // console.log(money);
      var order_id = document.querySelector("#order_id");

      let info = "";
      _tag.innerHTML = info;
      // _tag.appendChild(inp)
      _tag1.appendChild(donate)
      circleWrap.appendChild(circle)
      circle.appendChild(maskFull)
      maskFull.appendChild(fill)
      circle.appendChild(maskHalf)
      circle.appendChild(insideCircle)
      maskHalf.appendChild(fill1)
      progress.appendChild(circleWrap)
      progress.appendChild(divmoney)
      download.appendChild(share)
      download.appendChild(dcertificate)
      _tag1.appendChild(line)
      _tag1.appendChild(btn)
      _tag.appendChild(main)
      _tag.appendChild(create)
      _tag.appendChild(image1)
      _tag.appendChild(progress)
      _tag.appendChild(download)
      _tag.appendChild(person)
      _tag.appendChild(story)
      _tag.appendChild(para)
      topic.appendChild(_tag)
      topic.appendChild(_tag1)
      const payLink = document.querySelector('.btn-1')
      payLink.addEventListener('click',function(e){
      rzp1.open()
      e.preventDefault();
  })
  var options = {
    "key": "rzp_test_70lQ9aNlffkPrZ", // Enter the Key ID generated from the Dashboard
    "amount": `50000`, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Acme Corp",
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    
    "handler": function (response){
        alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature)

        $.ajax({
          url:"/api/mail",
          method:"post",
          data:{sendto:`${email}`,money:money},
          success:function(result,status,xhr){
            // console.log(money);
            console.log(result);
          },
          error:function(xhr,status,error){
            console.log(error);
          }
        })
        console.log(money);
        
        var data = {
          email:email
        }

        if(response.razorpay_payment_id){
            var updates = {
              money: money-500
            }
            firebase.database().ref(`details/${pageName}`).update(updates)
            // console.log(money);
        }
        console.log(response.razorpay_payment_id);
    },
    
    "prefill": {
        "name": name,
        "email": email,
        "contact": phone
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
})