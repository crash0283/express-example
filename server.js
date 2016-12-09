const express = require('express');
const hbs = require('hbs');
const port = 3000 || process.env.PORT;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');

hbs.registerHelper('currentYear',()=>{
  return new Date().getFullYear();
});

app.get('/',(req,res)=>{
  res.render('home.hbs',{
    pageTitle: 'Home'
  });
});

app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    pageTitle: 'About'
  })
})

app.listen(port,()=>{
  console.log(`Server is up at ${port}`);
});
