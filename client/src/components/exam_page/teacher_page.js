import React, {Component} from 'react'
import {Modal,Button} from 'react-bootstrap'
import {fetch_exam,fetch_submissions} from './ConnectServer'
import {Link } from 'react-router-dom'
import io from 'socket.io-client'

class TeacherExamPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            class_id : this.props.match.params.classId,
            exam_id : this.props.match.params.examId,
            questions : [],
            submissions : [],
            show : false,
            show_doubt : false,
            doubts : [],
            announcement : '',
            errors: {}
        }
    
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount(){
        this.socket = io('http://localhost:5000')
        this.socket.emit('room', this.state.exam_id)
        fetch_exam({id: this.state.exam_id}).then(exam=>{
            this.setState({questions : exam.questions_list})
        })
        fetch_submissions({exam_id : this.state.exam_id}).then(res=>{
            this.setState({submissions : res})
        })
        this.socket.on('doubt',(doubt)=>{
            console.log(doubt)
            this.setState((state) => ({
                doubts: [...state.doubts, doubt]
            }))
        })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onOpenModal(){
        this.setState({show : true})
    }

    onOpenDoubtModal(){
        this.setState({show_doubt : true})
    }

    onClose(){
        this.setState({show : false})
        this.setState({show_doubt : false})
    }

    onSend(){
        console.log(this.state.announcement)
        this.socket.emit('announcement',this.state.announcement)
        this.setState({show : false})
    }
    render(){
       const modal = (
        <Modal centered show = {this.state.show}  animation={false}>
            <Modal.Header closeButton onClick = {()=>this.onClose()}>
            <Modal.Title>Make announcement</Modal.Title>
            </Modal.Header>
            <Modal.Body style = {{minHeight : "200px"}}>
                <div style = {{fontWeight : "600", fontSize : "19px", color : "grey"}}>
                    <div className="form-group my-3 mx-3">
                        <textarea style = {{width: "100%", borderRadius : "8px", height : "150px"}} 
                            type = "text" 
                            name="announcement" value={this.state.announcement}
                            onChange={this.onChange}
                        >
                        </textarea>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="light" className="main-btn " onClick={()=> this.onSend()}>
                Send
            </Button>
            </Modal.Footer>
        </Modal> 
       )
       const modal2 = (
        <Modal centered show = {this.state.show_doubt}  animation={false}>
            <Modal.Header closeButton onClick = {()=>this.onClose()}>
            <Modal.Title>Doubts</Modal.Title>
            </Modal.Header>
                <Modal.Body style = {{minHeight : "200px"}}>
                    <div style = {{fontWeight : "600", fontSize : "19px", color : "grey"}}>
                        {this.state.doubts?
                        (
                            this.state.doubts.map(data=>(
                                <div>
                                    {data}
                                </div>
                            ))
                        ):''}
                    </div>
                </Modal.Body>
        </Modal> 
       )
        return (
            <div className = "container">
                <div className = "row my-3 mx-3">
                  <div className=" col">
                    <h3>Exam:</h3>
                    <hr/>
                    <div id = "scroll" style = {{overflowY: 'scroll',height : "600px",border : "1px solid grey", padding : "10px"}}>
                        <div><button className = "btn btn-light " style = {{width : "100%"}} onClick = {()=>this.onOpenModal()}>Announcement live</button><hr/></div>
                        <div><button className = "btn btn-light " style = {{width : "100%"}}>Update questions</button><hr/></div>
                        <div><button className = "btn btn-light " style = {{width : "100%"}} onClick = {()=>this.onOpenDoubtModal()}>Students doubts</button><hr/></div>
                    </div>
                  </div>
                  <div className=" col">
                    <h3>Questions</h3>
                    <hr/>
                    <div id = "scroll" style = {{overflowY: 'scroll',height : "600px",border : "1px solid grey"}}>
                      {this.state.questions ? (
                        this.state.questions.map((data,index)=>(
                          <div id = {index} style = {{border : "1px solid grey", borderRadius : "8px",padding:"10px", margin : "10px "}}>
                            Question {index+1} : <span style = {{fontWeight : "600", color : "grey"}}>{data}</span>
                          </div>
                        ))
                      ):''}
                      </div>
                  </div>
                  <div className=" col" >
                    <h3>Submissions</h3>
                    <hr/>
                    <div id = "scroll" style = {{overflowY: 'scroll',height : "600px",border : "1px solid grey"}}>
                    {this.state.submissions ? (
                        this.state.submissions.map((data,index)=>(
                          <div key = {index} style = {{border : "1px solid grey", borderRadius : "8px",padding:"10px", margin : "10px "}}>
                            Submission  {index+1} : <Link to ={{pathname : '/class/'+this.state.class_id + "/teacher/" +this.state.exam_id+"/"+ data.submitted_by.fullname + "/" + data.submitted_by._id  }} >{data.submitted_by.fullname}</Link>
                          </div>
                        ))
                      ):''}
                    </div>
                  </div>
                </div>
                {modal}
                {modal2}
            </div>
        )
    }
}

export default TeacherExamPage