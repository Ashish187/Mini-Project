const express = require('express')
const bodyParser = require('body-parser')
const Razorpay = require('razorpay')
const nodemailer = require('nodemailer')

const ejs = require('ejs')
const { response } = require('express')
const app = express()

const PORT = process.env.PORT || 2000

app.set('view engine','ejs')

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/donate',(req,res)=>{
    res.render('donate')
})

app.get('/details',(req,res)=>{
    res.render('details')
})
// app.post('/api/mail',(req,res)=>{
//     console.log(req);
//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: 'ashishanand16086@gmail.com',
//           pass: 'tumkur@123456'
//         }
//       });
      
//       var mailOptions = {
//         from: 'ashishanand16086@gmail.com',
//         to: req.body.to,
//         subject: 'Sending Email using Node.js',
//         text: 'That was easy!'
//       };
      
//       transporter.sendMail(mailOptions, function(error, info){
//         if (error) {
//           console.log(error);
//         } else {
//             res.send({status:"success"});
//           console.log('Email sent: ' + info.response);
//         }
//       });
// })

app.get('/donatePage/:page',(req,res)=>{
    var pageName = req.params.page;
    console.log(pageName);
    var instance = new Razorpay({ key_id: 'rzp_test_70lQ9aNlffkPrZ', key_secret: 'ptvRS0pE71oG2lrsRbKWeEFf' })

    var order = instance.orders.create({
     amount: 50000,
     currency: "INR",
     receipt: "receipt#1",
    }).then(object=>{
        console.log(object.id);
        res.render('donatePage',{pageName:pageName,orderId:object.id})
    })
})

app.listen(PORT,()=>{
    console.log(`Listening to the port ${PORT}`)
})