import React, { Component } from 'react';
import CardList from '../../components/CardList';

class ProgressColumn extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
        <div className="column">
          <div className="progress">
            <p>In Progress</p>
            <CardList cards={this.props.progress} forward={this.props.moveForwardDone} backward={this.props.moveBackwardQueue}></CardList>
          </div>
        </div>
    )
  }
}

export default ProgressColumn;