import React, {Component} from 'react'
import {Modal,Button} from 'react-bootstrap'
import {create} from './ConnectServer'

class Create extends Component {
    constructor(props){
        super(props)
        this.state = {
          title: '',
          info: '',
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
          info: this.state.info,
          title: this.state.title
        }
        create(newClass).then(res=>{
            this.setState({id:res})
        })
        this.setState({show : 2})
    }
    render(){
        const modal1 = (
            <Modal centered show ={this.state.show===1} animation={false}>
                <Modal.Header closeButton onClick = {this.props.onClose}>
                <Modal.Title>Create new class</Modal.Title>
                </Modal.Header>
                <Modal.Body style = {{minHeight : "200px"}}>
                    <div className="form-group my-3 mx-3">
                        <label htmlFor="title">Title</label>
                        <input
                        type="text"
                        className="form-control"
                        name="title"
                        placeholder="Enter the class name"
                        required
                        value={this.state.title}
                        onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group my-3 mx-3">
                        <label htmlFor="info">Info</label>
                        <input
                        type="text"
                        className="form-control"
                        name="info"
                        placeholder="Enter the class info"
                        required
                        value={this.state.info}
                        onChange={this.onChange}
                        />
                    </div>   
                </Modal.Body>
                <Modal.Footer>
                <Button variant="light" className="main-btn " onClick={this.onSubmit}>
                    Create
                </Button>
                </Modal.Footer>
            </Modal>
        )
        const modal2 =(
            <Modal centered show = {this.state.show === 2}  animation={false}>
                <Modal.Header closeButton onClick = {this.props.onClose}>
                <Modal.Title>Create new class</Modal.Title>
                </Modal.Header>
                <Modal.Body style = {{minHeight : "200px"}}>
                     <div className = "text-center" style = {{fontWeight : "600", fontSize : "19px", color : "grey"}}>
                         Successfully created !! <br/> Class id : {this.state.id}
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
            </div>
        )
    }
}

export default Create