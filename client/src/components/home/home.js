import React, { Component } from 'react'
import {Card,Button} from "react-bootstrap"
import {fetch_student_class,fetch_teacher_class} from './ConnectServer'

class Home extends Component {

  constructor(){
    super()
    this.state = {
      student_classes : [],
      teacher_classes: []
    }
  }

  componentDidMount() {
    if(!localStorage.usertoken)
      this.props.history.push(`/`)
    if(localStorage.teacher==="true"){
      fetch_teacher_class().then(res=>{
        this.setState({teacher_classes : res})
        console.log(res)
      })
    }
    else{
      fetch_student_class().then(res=>{
        this.setState({student_classes : res})
        console.log(res)
      })
    }
  }

  onEnterClass(classId){
    const classURL = '/class/'+classId
    this.props.history.push(classURL)
  }
  
  render() {
    return (
      <div className = "container my-5">
      <div className="row">
        {
          this.state.student_classes ? (
            this.state.student_classes.map(data =>(
              <Card className = "mr-3 my-3 py-3" key = {data.class_id.id} style={{ width: '16rem' }}>
              <Card.Body>
                <Card.Title>{data.class_id.title}</Card.Title>
                <Card.Text>
                  {data.class_id.info}
                </Card.Text>
                <Button variant="primary" onClick = {()=>this.onEnterClass(data.class_id.id)}>Enter</Button>
              </Card.Body>
            </Card>
            ))
          ): ''
        }
      </div>
      <div className="row">
        {
          this.state.teacher_classes ? (
            this.state.teacher_classes.map(data =>(
              <Card className = "mr-3" key = {data.id} style={{ width: '16rem' }}>
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                  {data.info}
                </Card.Text>
                <Button variant="primary" onClick = {()=>this.onEnterClass(data.id)}>Enter</Button>
              </Card.Body>
            </Card>
            ))
          ): ''
        }
      </div>
      </div>
    )
  }
}

export default Home