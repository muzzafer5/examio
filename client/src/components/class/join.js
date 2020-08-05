import React, {Component} from 'react'
import {Modal,Button} from 'react-bootstrap'
import {join} from './ConnectServer'

class Join extends Component {
    constructor(props){
        super(props)
        this.state = {
          title: '',
          id : '',
          show : 1,
          errors: {}
        }
    
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        var newClass = {
          id: this.state.id
        }
        join(newClass).then(res=>{
            if(res){
                this.setState({title : res})
                this.setState({show : 2})
            }
            else{
                this.setState({show : 3})
            }
        })
    }
    render(){
        const modal1 = (
            <Modal centered show ={this.state.show===1} animation={false}>
                <Modal.Header closeButton onClick = {this.props.onClose}>
                <Modal.Title>Join a class</Modal.Title>
                </Modal.Header>
                <Modal.Body style = {{minHeight : "200px"}}>
                    <div className="form-group my-3 mx-3">
                        <label htmlFor="title" className = "mt-3 pb-2">Class id:</label>
                        <input
                        type="text"
                        className="form-control"
                        name="id"
                        placeholder="Enter the class id"
                        required
                        value={this.state.id}
                        onChange={this.onChange}
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="light" className="main-btn " onClick={this.onSubmit}>
                    Join
                </Button>
                </Modal.Footer>
            </Modal>
        )
        const modal2 =(
            <Modal centered show = {this.state.show === 2}  animation={false}>
                <Modal.Header closeButton onClick = {this.props.onClose}>
                <Modal.Title>Join a class</Modal.Title>
                </Modal.Header>
                <Modal.Body style = {{minHeight : "200px"}}>
                     <div className = "text-center" style = {{fontWeight : "600", fontSize : "19px", color : "grey"}}>
                        Class title : {this.state.title} <br/>Successfully joined !! 
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="light" className="main-btn " onClick={this.props.onClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        )
        const modal3 =(
            <Modal centered show = {this.state.show === 3}  animation={false}>
                <Modal.Header closeButton onClick = {this.props.onClose}>
                <Modal.Title>Join a class</Modal.Title>
                </Modal.Header>
                <Modal.Body style = {{minHeight : "200px"}}>
                     <div className = "text-center" style = {{fontWeight : "600", fontSize : "19px", color : "grey"}}>
                        !! Wrong class id !!
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="light" className="main-btn " onClick={this.props.onClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        )
        return (
            <div>
                {modal1}
                {modal2}
                {modal3}
            </div>
        )
    }
}

export default Join