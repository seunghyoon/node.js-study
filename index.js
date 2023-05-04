const express = require('express')
const app = express()
const port = 3000
const config = require('./config/key')

const { User } = require('./models/User')
const bodyParser = require('body-parser');


//content-type setting
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());




const mongoose = require('mongoose')
mongoose.connect(config.mongoUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected.....'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요.....MongoDB Connected...1..')
})

app.post('/register', (req, res) => {
  console.log("req.body {}", req.body);
  //회원가입 
  const user = new User(req.body);
  console.log(user);
  user.save().then(()=>{
    res.status(200).json({
      success: true
    })
  }).catch((err)=>{
    res.json({
      success: false, err
    })
  })
  /*
  user.save((err, userInfo) =>{
    if(err) return res.json({ 
      success: false
    })
    return res.status(200).json({cl
       success: true 
    })
    
  });
  */
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})