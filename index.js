const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://hilov:bdggCwdSkyw0ugiH@cluster0.w5i3xbm.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected.....'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요.....MongoDB Connected.....')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})