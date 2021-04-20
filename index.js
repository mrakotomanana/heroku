const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express()
const fs = require('fs')
const data = 'data.txt'

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/login', (req, res) => res.render('pages/login'))
app.get('/dashboard', (req, res) => {
  fs.readFile(data,'utf8', (err, data)=>{
    if(err) throw err
    res.render('admin/dashboard',{data : data})
  })
})
app.get('/', (req, res) => res.render('pages/index'))
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
