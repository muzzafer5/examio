import React, { Component } from 'react'
import {Card,Button} from "react-bootstrap"
import {fetch_class_content,create_class_content} from './ConnectServer'
import {Modal} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class ClassPage extends Component {

  constructor(props){
    super(props)
    this.state = {
      class_id : this.props.match.params.classId,
      announcement : '',
      exam_link : '',
      title : '',
      user : 'student',
      show : false,
      contents : []
    }
    this.onClose = this.onClose.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    if(!localStorage.usertoken)
      this.props.history.push(`/`)
    if(localStorage.teacher ==="true"){
      this.setState({user : "teacher"})
    }
    fetch_class_content({id : this.state.class_id}).then(res=>{
      this.setState({title : res.title})
      this.setState({contents:res.contents})
      console.log(res)
    })
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onCreateClassContent(){
    var detail = {
      id : this.state.class_id,
      announcement : this.state.announcement,
      exam_link : this.state.exam_link
    }
    console.log(detail)
    create_class_content(detail).then(res=>{
      this.setState({contents:res})
      console.log(res)
      this.setState({show : false})
    })    
  }

  onCreateExam(){
    const examURL = '/class/'+this.state.class_id + '/create_exam'
    this.props.history.push(examURL)
  }

  onOpenModal(){
    this.setState({show :true})
  }

  onClose(e){
    this.setState({show :false})
  }
  render() {
    const modal = (
        <Modal centered show = {this.state.show}  animation={false}>
          <Modal.Header closeButton onClick = {this.onClose}>
          <Modal.Title>Create class content</Modal.Title>
          </Modal.Header>
          <Modal.Body style = {{minHeight : "200px"}}>
              <div style = {{fontWeight : "600", fontSize : "19px", color : "grey"}}>
                  <div className="form-group my-3 mx-3">
                        <textarea style = {{width: "100%", borderRadius : "8px", height : "150px"}} 
                          type = "text" 
                          placeholder = "   Enter the class content  " 
                          name="announcement" value={this.state.announcement}
                          onChange={this.onChange}
                        >
                      </textarea>
                    </div>
              </div>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="light" className="main-btn " onClick={()=>this.onCreateClassContent()}>
              Create
          </Button>
          </Modal.Footer>
      </Modal>  
    )
    return (
      <div className = "container">
        <h3 className = "text-center my-3">{this.state.title}</h3>
        {this.state.user==="teacher"?
          ( 
            <div>
              <Button variant="light" className="main-btn " onClick={()=>this.onOpenModal()}>
                New announcement +
              </Button>
              <Button variant="light" className="main-btn mx-3 px-3" onClick={()=>this.onCreateExam()}>
                Create exam +
              </Button>
            </div>
          ):''}
              {this.state.contents ? (
                this.state.contents.map(data =>(
                  <Card className = "my-3">
                  <Card.Body>
                    <Card.Text>
                      {data.announcement? (<div><b>Announcement : </b>{data.announcement}</div>):''}
                      {data.exam_link ? (<div>
                        <b>Test link : </b>
                        <Link to = {{ pathname : '/class/' + this.state.class_id + '/' +this.state.user+ '/'+ data.exam_link._id}}>{data.exam_link.title}/{data.exam_link._id}</Link>
                      </div>):''}
                    </Card.Text>
                  </Card.Body>
                </Card>
                ))
              ): ''
            }
            {modal}
      </div>
    )
  }
}

export default ClassPage