import React, { Component } from 'react'
import {Link } from 'react-router-dom'

class CreateExam extends Component {
    constructor(props) {
        super(props)
        this.state = {
          class_id : this.props.match.params.classId,
          exam_type : this.props.match.params.Id,
          title: '',
          start_time: '',
          end_time : '',
          errors: {}
        }
        this.onChange = this.onChange.bind(this)
      }
    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
      }
       
      render() {
        return (
          <div className="createExam " style = {{border : "2px solid grey",position:"absolute", top : "20%", width: "70%", left : "15%"}}>
                <form validate="true">
        <h1 className="h2 text-center py-2" style = {{borderBottom : "1px solid grey"}}>Create {this.state.exam_type == "1"? (<span>group </span>): ''}exam</h1>
                  <div className="form-group my-3 mx-3">
                    <label htmlFor="title">Exam title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      required
                      placeholder="Enter the Exam title"
                      value={this.state.title}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group my-3 mx-3">
                    <label htmlFor="start_time">Start date and time</label>
                    <input
                      type="datetime-local"
                      className="form-control"
                      name="start_time"
                      required
                      value={this.state.start_time}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group my-3 mx-3">
                    <label htmlFor="end_time">End date and time</label>
                    <input
                      type="datetime-local"
                      className="form-control"
                      name="end_time"
                      required
                      value={this.state.end_time}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className = "my-3">
                  <Link to={{
                            pathname: '/class/'+this.state.class_id + '/create_exam/add/question',
                            state: { params: {start_time : this.state.start_time,end_time : this.state.end_time,title : this.state.title,exam_type : this.state.exam_type} }
                            }}
                            type="submit"
                            className="btn btn-primary mx-3 px-5"
                  > 
                    submit 
                  </Link>
                  </div>
                </form>
          </div>
        )
      }

}

export default CreateExam