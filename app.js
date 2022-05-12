const express = require('express')
const bodeParser = require('body-parser')
const Razorpay = require('razorpay')

const ejs = require('ejs')
const app = express()

const PORT = process.env.PORT || 2000


app.set('view engine','ejs')

app.use(express.static(__dirname + '/public'))
app.use(bodeParser.urlencoded({ extended: false}))
app.use(bodeParser.json())

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/donate',(req,res)=>{
    res.render('donate')
})

app.get('/details',(req,res)=>{
    res.render('details')
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