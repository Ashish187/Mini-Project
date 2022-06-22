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

app.get('/contact',(req,res)=>{
    res.render('contact')
})

app.get('/details',(req,res)=>{
    res.render('details')
})

app.get('/price',(req,res)=>{
    res.render('price')
})

app.get('/team',(req,res)=>{
    res.render('team')
})
app.post('/api/mail',(req,res)=>{
    console.log(req);
    var transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        secureConnection: false,
        port: 587, 
        auth: {
          user: 'ashishanand16000@outlook.com',
          pass: 'ashishanand@123456'
        }
      });
      
      var mailOptions = {
        from: 'ashishanand16000@outlook.com',
        to: req.body.sendto,
        subject: 'iSupport sends You email',
        text: `
        You have recieved 500
        ${req.body.money-500>0?`Your Raised money has been reduced to ${req.body.money-500}`:'Congrats You have recieved all the money you raised'}
        `
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
            res.send({status:"success"});
          console.log('Email sent: ' + info.response);
        }
      });
})

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