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
const classroom = require("./components/class/routes/class")
const student = require("./components/student/routes/student")
const teacher = require("./components/teacher/routes/teacher")
const exam = require("./components/exam/routes/exam")
const answer = require("./components/answer/routes/answer")

app.use("/auth", auth)
app.use("/class",classroom)
app.use("/student",student)
app.use("/teacher",teacher)
app.use("/exam",exam)
app.use("/answer",answer)

app.get('/', (req, res) => {res.send('Exam.Io')})

module.exports = app

//export default app
