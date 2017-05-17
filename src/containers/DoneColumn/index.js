import React, { Component } from 'react';
import CardList from '../../components/CardList';

class DoneColumn extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
        <div className="column">
          <div className="done">
            <p>Done</p>
            <CardList cards={this.props.done} forward={this.props.forward} backward={this.props.moveBackwardProgress}></CardList>
          </div>
        </div>

    )
  }
}

export default DoneColumn;
