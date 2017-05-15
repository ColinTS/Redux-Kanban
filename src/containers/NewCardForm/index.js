/*jshint esversion: 6*/
import React, { Component } from 'react';
import { addCard } from '../../actions';
import { connect } from 'react-redux';


class NewCardForm extends Component{
  constructor(props){
    super(props);

    // set the initial state
    this.state = {
      title: "",
      priority: "",
      status: "Queue",
      created_by: "",
      assigned_to: "",
      id: ""
    };

  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addCard(this.state);
    this.setState({
      title: "",
      priority: "",
      status: "Queue",
      created_by: "",
      assigned_to: "",
      id: ""
    })
  }

  handleTitleChange = (event) => {
    this.setState({ title : event.target.value });
  };

  handlePriorityChange = (event) => {
    this.setState({ priority : event.target.value });
  }

  handleCreatedByChange = (event) => {
    this.setState({ created_by : event.target.value });
  }

  handleAssignedToChange = (event) => {
    this.setState({ assigned_to : event.target.value });
  }

  handleIdChange = (event) => {
    this.setState({ id : event.target.value });
  }

  handleStatusChange = (event) => {
    this.setState({ status : event.target.value });
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text" placeholder="title" onChange={this.handleTitleChange} value={this.state.title} />
        </div>
        <div>
          <input type="text" placeholder="priority" onChange={this.handlePriorityChange} value={this.state.priority} />
        </div>
        <div>
          <input type="text" placeholder="created by" onChange={this.handleCreatedByChange} value={this.state.created_by} />
        </div>
        <div>
          <input type="text" placeholder="assigned to" onChange={this.handleAssignedToChange} value={this.state.assigned_to} />
        </div>
        <div>
          <input type="text" placeholder="id" onChange={this.handleIdChange} value={this.state.id} />
        </div>
        <div>
          <button type="submit">Add Card</button>
        </div>
      </form>
    )
  }

}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addCard: card => {
      dispatch(addCard(card))
    }
  }
}

const ConnectedNewCardForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCardForm);

export default ConnectedNewCardForm;