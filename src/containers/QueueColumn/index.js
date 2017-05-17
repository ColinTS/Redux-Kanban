import React, { Component } from 'react';
import CardList from '../../components/CardList';

class QueueColumn extends Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log('QUEUE COLUMN', this.props);
    return (
        <div className="column">
          <div className="queue">
            <p>To Do</p>
            <CardList cards={this.props.todo} forward={this.props.moveForward} backward={this.props.backward} ></CardList>
          </div>
        </div>
    )
  }
}

export default QueueColumn;