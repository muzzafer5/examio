import React, {Component} from 'react'
import {Modal,Button} from 'react-bootstrap'
import {fetch_answer} from './ConnectServer'

class AnswerPage extends Component {
    constructor(props){
        super(props)
        this.state = {
          user_id : this.props.match.params.userId,
          exam_id : this.props.match.params.examId,
          fullname :  this.props.match.params.fullname,
          answers : []
        }
    }
    componentDidMount(){
        fetch_answer({user_id:this.state.user_id,exam_id : this.state.exam_id}).then(res=>{
            this.setState({answers: res.answers_list})
        })
    }
    render(){
        return(
            <div className = "container my-5">
                <h3 className = "text-center">
                    Answer sheet (Student : {this.state.fullname})
                </h3>
                <div id = "scroll" style = {{overflowY: 'scroll',height : "600px",border : "2px solid grey", borderRadius : "8px"}}>
                      {this.state.answers ? (
                        this.state.answers.map((data,index)=>(
                          <div id = {index} style = {{border : "1px solid grey", borderRadius : "8px",padding:"10px", margin : "10px "}}>
                            Answer {index+1} : <span style = {{fontWeight : "600", color : "grey"}}>{data}</span>
                          </div>
                        ))
                      ):''}
                      </div>
            </div>
        )
    }
}
 export default AnswerPage 