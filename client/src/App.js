import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import {RouteWithFooter,RouteWithNavbar,RouteWithNavbarFooter} from "./route"

import Home from './components/home/home'
import Landing from './components/auth/landing'
import Login from './components/auth/login'
import Signup from './components/auth/signup'
import ClassPage from './components/class/class_page'
import CreateExam from './components/exam/create'
import CreateQuestion from './components/exam/create_question'
import StudentExamPage from './components/exam_page/student_page'
import TeacherExamPage from './components/exam_page/teacher_page'

class App extends PureComponent {
  render () {
    return (
      <Router>
        <div className="App">
          <RouteWithFooter exact path="/" component={Landing} />
          <RouteWithNavbarFooter exact path="/home" component={Home} />
          <Route exact path = "/auth/login" component = {Login} />
          <Route exact path = "/auth/signup" component = {Signup} />
          <RouteWithNavbarFooter exact path = "/class/:classId" component = {ClassPage}/>
          <RouteWithNavbarFooter exact path = "/class/:classId/create_exam" component = {CreateExam}/>
          <RouteWithNavbarFooter exact path = "/class/:classId/create_exam/question" component = {CreateQuestion}/>
          <Route exact path = "/class/:classId/teacher/:examId" component = {TeacherExamPage}/>
          <Route exact path = "/class/:classId/student/:examId" component = {StudentExamPage}/>
        </div>
      </Router>
    )
  }
}
export default App;

