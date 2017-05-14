import React, { Component } from 'react';
import CardList from '../../components/CardList';

class QueueColumn extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
        <div>
          <div className="queue">
            <p>To Do</p>
            <CardList cards={this.props.todo} forward={this.props.moveForward} backward={this.props.backward} ></CardList>
          </div>
        </div>
    )
  }
}

export default QueueColumn;