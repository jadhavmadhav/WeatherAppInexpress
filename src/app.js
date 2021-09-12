const express = require ('express')
const app = express();
const path = require('path')
const hbs = require('hbs')
const port = 2000;

//static path
const Static_Path=path.join(__dirname,'../public')
const Template_path=path.join(__dirname,'../template/views')
const partials_path=path.join(__dirname , '../template/partials')


app.set('view engine', 'hbs')
app.set('views',Template_path)
hbs.registerPartials(partials_path)

app.use(express.static(Static_Path))
//routing
 app.get('/',(req,res)=>{
     res.render("index")
 });

 app.get('/about' ,(req ,res)=>{
     res.render('about')
 })

 app.get('/weather',(req,res)=>{
     res.render("weather")
 })

 app.get('*',(req,res)=>{
     res.render("404error",{
         errordata :"Opps! This Page is Not Found"
     })
 })

 app.listen(port,(error)=>{
     console.log(`server started in ${port}`)
 })

 