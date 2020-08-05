import React, {Component} from 'react'
import {Modal,Button} from 'react-bootstrap'

class TeacherExamPage extends Component {
    constructor(props){
        super(props)
        this.state = {
          errors: {}
        }
    
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount(){
            this.playVideoFromCamera()
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

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render(){
       
        return (
            <div>
                Teacher
                <video style = {{border : "2px solid black", height:"150px"}} id="localVideo" autoplay="true" muted/>
            </div>
        )
    }
}

export default TeacherExamPage