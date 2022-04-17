const express = require('express')
const bodeParser = require('body-parser')

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
    res.render('donatePage',{pageName:pageName})
})

app.listen(PORT,()=>{
    console.log(`Listening to the port ${PORT}`)
})