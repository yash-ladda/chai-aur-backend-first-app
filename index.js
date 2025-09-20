require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
    res.send('Hello World, this is home route')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at our site</h1>')
})

app.get('/githubname', (req, res)=>{
    res.send('<a href="https://github.com/yash-ladda"> Click here to go on github profile</a>')
})

