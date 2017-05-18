/*jshint esversion: 6*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../../components/CardList';
import NewCardForm from '../NewCardForm';
import QueueColumn from '../QueueColumn';
import ProgressColumn from '../ProgressColumn';
import DoneColumn from '../DoneColumn';
import { loadCards, addCard, moveForward, moveForwardDone, moveBackwardQueue, moveBackwardProgress } from '../../actions';

import './styles.css';

class App extends Component{

  constructor(props){
    super(props);

  }

  componentWillMount() {
    const todo = [];
    const progress = [];
    const done = [];
    this.getCards();
    // let allCards = this.props.cards;

  }

   getCards = () => {
    this.props.loadCards();
   }

  render(){

    return (
      <div className ="App">
        <h1>Kanban Board</h1>
        <NewCardForm addCard={this.addCard}/>
        <div id="columns">
          <QueueColumn todo={this.props.todo} moveForward={this.props.moveForward} backward={()=> {}} />
          <ProgressColumn progress={this.props.progress} moveBackwardQueue={this.props.moveBackwardQueue} moveForwardDone={this.props.moveForwardDone} />
          <DoneColumn done={this.props.done} forward={()=> {}} moveBackwardProgress={this.props.moveBackwardProgress} />
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
    todo: state.cards.filter(card => card.status === 'Queue'),
    progress: state.cards.filter(card => card.status === 'In Progress'),
    done: state.cards.filter(card => card.status === 'Done')
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadCards: cards => dispatch(loadCards(cards)),

    addCard: card => {
      dispatch(addCard(card))
    },
    moveForward: card => {
      dispatch(moveForward(card))
    },
    moveForwardDone: card => {
      dispatch(moveForwardDone(card))
    },
    moveBackwardProgress: card => {
      dispatch(moveBackwardProgress(card))
    },
    moveBackwardQueue: card => {
      dispatch(moveBackwardQueue(card))
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;