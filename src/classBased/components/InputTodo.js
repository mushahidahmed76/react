import React, { Component } from "react"

class InputTodo extends Component {
    state = {
        title: ""
    }
    onChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleSubmit = e =>{
        if(this.state.title.trim()){
            e.preventDefault();
        this.props.addTodoProps(this.state.title);
        this.setState({
            title: ""
        })
        }else{ 
            alert('Please write item');
        }
        
    }
  render() {
    return (
        <form onSubmit={this.handleSubmit} className="form-container">
        <input onChange={this.onChange} name="title" type="text" className="input-text" value={this.state.title} placeholder="Add Todo..." />
        <button className="input-submit">Submit</button>
      </form>
    )
  }
}
export default InputTodo