import React, { Component } from 'react'
import {Modal,Button} from 'react-bootstrap'
import './scroll.css'
import {create_exam} from './ConnectServer'

class CreateQuestion extends Component {
    constructor(props) {
        super(props)
        this.state = {
          class_id : this.props.match.params.classId,
          title: this.props.location.state.params.title,
          start_time: this.props.location.state.params.start_time,
          end_time : this.props.location.state.params.end_time,
          exam_type : this.props.location.state.params.exam_type,
          new_question : '',
          questions : [],
          show : false,
          errors: {}
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      }
    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
      }

      onAddQuestion(ques){
        var ques = this.state.new_question
        this.setState((state) => ({
          questions: [...state.questions, ques]
        }), this.scrollToBottom)
        this.setState({show : false})
      }

      onClose(){
        this.setState({show : false})
      }
      onOpenModal(){
        this.setState({show : true})
      }

      scrollToBottom() {
        const question = document.getElementById('scroll');
        question.scrollTop = question.scrollHeight;
      }

      onSubmit(e) {
        e.preventDefault()
        var newExam = {
            title : this.state.title,
            class_id : this.state.class_id,
            start_time : this.state.start_time,
            end_time : this.state.end_time,
            total_questions : this.state.questions.length,
            questions : this.state.questions,
            group : this.state.exam_type
        }
        create_exam(newExam).then(res=>{
          console.log(res)
          alert("created successfully")
          this.props.history.push("/class/" + this.state.class_id)
        })
      }
       
      render() {
        const modal = (
          <Modal centered show = {this.state.show}  animation={false}>
            <Modal.Header closeButton onClick = {()=>this.onClose()}>
            <Modal.Title>Add question</Modal.Title>
            </Modal.Header>
            <Modal.Body style = {{minHeight : "200px"}}>
                <div style = {{fontWeight : "600", fontSize : "19px", color : "grey"}}>
                    <div className="form-group my-3 mx-3">
                          <textarea style = {{width: "100%", borderRadius : "8px", height : "150px"}} 
                            type = "text" 
                            placeholder = "   Enter the the question statement  " 
                            name="new_question" value={this.state.new_question}
                            onChange={this.onChange}
                          >
                        </textarea>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="light" className="main-btn " onClick={()=>this.onAddQuestion()}>
                Add
            </Button>
            </Modal.Footer>
        </Modal>  
      )
        return (
          <div className="createExam " style = {{border : "2px solid grey",position:"absolute", top : "10%", width: "80%", left : "10%"}}>
                <div>
                  <h1 className="h2 text-center py-2" style = {{borderBottom : "1px solid grey"}}>Add questions</h1>
                  <div className="my-3 mx-3">
                    <button className = "btn btn-light" style = {{borderRadius :"50%", fontSize : "40px", padding : "0px 15px"}} 
                    onClick = {()=>this.onOpenModal()}>
                      +
                    </button>
                  </div>
                  <div className="my-3 mx-3 pr-3" id = "scroll" style = {{overflowY: 'scroll',minHeight : "200px", maxHeight : "400px",fontWeight : "20px"}}>
                      {this.state.questions ? (
                        this.state.questions.map((data,index)=>(
                          <div id = {index} style = {{border : "1px solid grey", borderRadius : "8px",padding:"10px", marginTop : "10px"}}>
                            Question {index+1} : <span style = {{fontWeight : "600", color : "grey"}}>{data}</span>
                          </div>
                        ))
                      ):''}
                  </div>
                  <div className = "my-3">
                    <button
                      type="submit"
                      className="btn btn-primary mx-3 px-5" onClick={this.onSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
                {modal}
          </div>
        )
      }

}

export default CreateQuestion