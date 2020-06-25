const express=require('express')
const bodyParser = require('body-parser')

const app = express()

/* Allow larger requests*/
app.use(bodyParser.urlencoded({
    limit: "50mb",
    extended: false
  }));
app.use(bodyParser.json({limit: "50mb"}));

const auth = require("./components/auth/routes/auth")
const class = require("./components/class/routes/class")

app.use("/auth", auth)
app.use("/class",class)

app.get('/', (req, res) => {res.send('Exam.Io')})

module.exports = app

//export default app
