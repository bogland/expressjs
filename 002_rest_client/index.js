const express = require('express');
var bodyParser = require('body-parser')
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use('/',(req,res,next)=>{
    console.log("ㅎㅇㅎㅇ");
    // req.id=1;
    next();
})

app.get('/:id',(req,res)=>{
    console.log("ㅎㅇㅎㅇ2")
    res.send(req.params);
    console.log(req.id);
})
app.post('/',(req,res)=>{
    console.log(req.body);
    res.send(req.body);
})


const cb0 = function (req, res, next) {
    console.log('CB0')
    next()
  }
  
  const cb1 = function (req, res, next) {
    console.log('CB1')
    next()
  }
  
  const cb2 = function (req, res) {
    res.send('Hello from C!')
  }
  
  app.get('/example/c', [cb0, cb1],(req,res)=>{
    res.send("ㅎㅇㅎㅇ");
  })

app.listen(5000);