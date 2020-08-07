import React, {Component} from 'react'
import {Modal,Button} from 'react-bootstrap'
import {submit_answers,fetch_exam} from './ConnectServer'
import io from 'socket.io-client'

class StudentExamPage extends Component {
    constructor(props){
        super(props)
        this.state = {
          class_id : this.props.match.params.classId,
          exam_id : this.props.match.params.examId,
          exam_paper : {},
          time : {},
          seconds : 1,
          answers : [],
          answer: '',
          errors: {}
        }
        this.timer = 0;
        this.handle = null 
        this.startTimer = this.startTimer.bind(this)
        this.countDown = this.countDown.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    startTimer() {
        if (this.timer == 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        })
        
        // Check if we're at zero.
        if (seconds == 0) { 
            clearInterval(this.timer);
        }
    }

   secondsToTime(secs){
        let hours = Math.floor(secs / (60 * 60));
    
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
    
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
    
        let obj = {
          "h": hours,
          "m": minutes,
          "s": seconds
        };
        return obj;
    }

    onChange(e){
        var index = e.target.id
        var value = e.target.value
        this.setState(state => {
            const answers = state.answers.map((item, j) => {
              if (j == index) {
                return value;
              } else {
                return item;
              }
            });
            return {
              answers,
            };
          })
    }

    onSubmit(e){
        var detail = {
            answers : this.state.answers,
            exam_id : this.state.exam_id
        }
        submit_answers(detail).then(res=>{
            console.log(res)
            alert("submitted successfully")
            this.props.history.push(`/home`)
        })
    }
    async playVideoFromCamera() {
        try {
            const constraints = {'video': true, 'audio': true};
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            const videoElement = document.querySelector('#localVideo');
            videoElement.srcObject = stream;
        } catch(error) {
            console.error('Error opening video camera.', error);
        }
    }
    
    componentDidMount (){
        this.socket = io('http://localhost:5000')
        this.socket.emit('room', this.state.exam_id)
        
        this.playVideoFromCamera()
        fetch_exam({id: this.state.exam_id}).then(exam=>{
            this.setState({exam_paper : exam})
            var arr = new Array(exam.total_questions).fill('')
            var startDate = new Date()
            var endDate   = new Date(exam.end_time);
            var seconds = (endDate.getTime() - startDate.getTime()) / 1000
            this.setState({seconds : seconds})
            let timeLeftVar = this.secondsToTime(seconds)
            this.setState({ time: timeLeftVar })
            this.startTimer()
            this.setState({answers : arr})         
        })
        this.socket.on('message', (msg) => {
            alert("New announcement :" + msg)
          })
    }

    async fullScreen(){
        // Different browser have different syntax therefore check if any of these syntax is available only then it should be used
        //If already in fullscreen mode
        if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
        // if not in fullscreen mode
        else{
            if (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled) {
                let videoContainer = this.videoDiv.current;
                if (videoContainer.requestFullscreen) {
                    videoContainer.requestFullscreen();
                } else if (videoContainer.webkitRequestFullscreen) {
                    videoContainer.webkitRequestFullscreen();
                } else if (videoContainer.mozRequestFullScreen) {
                    videoContainer.mozRequestFullScreen();
                } else if (videoContainer.msRequestFullscreen) {
                    videoContainer.msRequestFullscreen();
                } else {
                    //FullScreen not available on browser
                    window.alert('FullScreen not allowed by browser');
                }
            }
        }
    }
    
    render(){
       
        return (
            <div className = "ongoing exam mx-5" >
                <div className = "Header" style = {{fontSize : "17px"}}>
                    <div className = "row ">
                        <div className = "col-4 pt-4">
                            Exam Title : <b style={{fontSize : "20px"}}>{this.state.exam_paper.title}</b> 
                        </div>
                        <div className = "col-5 pt-3 pl-4">
                            Time left : <b style={{color:"red", fontSize : "20px"}}>{this.state.time.h} : {this.state.time.m} : {this.state.time.s}</b>
                        </div>
                        <div className = "col-2 pt-4" >
                            <span style = {{float : "right"}}>
                            <button className = "btn btn-primary" 
                                onClick = {this.onSubmit}
                            >
                                 Submit
                            </button>
                            <button  className = "btn btn-light ml-4">Ask doubt</button>
                            </span>
                        </div>
                        <div className = "col-1">
                            <video style = {{border : "2px solid black", height:"90px", float : "right"}} id="localVideo" autoplay="true" muted/>
                        </div>
                    </div>

               </div>
                <div className = "questions"
                    style = {{overflowY: 'scroll',height : "650px",fontWeight : "20px", border : "2px solid grey", borderRadius : "8px"}}
                >
                    {this.state.exam_paper.questions_list ? (
                        this.state.exam_paper.questions_list.map((data,index)=>(
                            <div key = {index} style = {{border : "1px solid #e6e6e6",margin : "20px 10px",padding : "10px", borderRadius : "8px", boxShadow: "5px 10px 5px #dedede"}}>
                                <div className = "question">
                                    <b>Question {index+1} :</b> {data}
                                    <hr/>
                                </div>
                                <div className = "answer">
                                    <div className="form-group my-3 mx-3">
                                        <b><label htmlFor="email" style ={{color : "grey"}}>Answer : </label></b>
                                        <textarea id={index} style = {{width: "100%", borderRadius : "5px", borderColor : "grey",height : "150px"}} 
                                            type = "text" onChange = {this.onChange}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        ))
                    ):''}
                </div>
            </div>
        )
    }
}

export default StudentExamPage