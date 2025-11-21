const express = require('express')
const app = express()
const port = 3000



app.set('view engine', 'ejs')

app.use(express.urlencoded())
app.use(express.json())
app.use(express.static('static'))

const userRoutes = require('./routes/home')
app.use('/',userRoutes)

const Routes = require('./routes/games')
app.use('/game',Routes)


app.listen(port,"192.168.29.93", () => {
    console.log(`Example app listening on port ${port}`)
})