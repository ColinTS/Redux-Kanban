/*jshint esversion: 6*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../../components/CardList';
import NewCardForm from '../NewCardForm';
import QueueColumn from '../QueueColumn';
import ProgressColumn from '../ProgressColumn';
import DoneColumn from '../DoneColumn';
// import { addBookToFakeXHR, getBooksFromFakeXHR } from '../../lib/books.db';
// import { addCard, move } from '../../actions';

import './styles.css';

class App extends Component{

  constructor(props){
    super(props);

  }

  addCard = (card) => {
    console.log(card);
    this.setState({
      todo : this.state.todo.concat(card)
    });
  }

  moveForward = (id) => {
    let index, card;
    let todoArray = this.state.todo

    this.state.todo.forEach((currentCard, cardIndex) => {
      if(currentCard.id === id){
        index = cardIndex;
        card = currentCard;
        card.status = "In Progress"
      }
    })

    let removeTodo = this.state.todo.slice(0, index)
                     .concat(this.state.todo.slice(index+ 1, todoArray.length));
    let addProgress = this.state.progress.concat([card]);

    this.setState({
      todo : removeTodo,
      progress : addProgress,
    })

  }

  moveForwardDone = (id) => {
    let index, card;
    let progressArray = this.state.progress

    this.state.progress.forEach((currentCard, cardIndex) => {
      if(currentCard.id === id){
        index = cardIndex;
        card = currentCard;
        card.status = "Done"
      }
    })

    let removeProgress = this.state.progress.slice(0, index)
                     .concat(this.state.progress.slice(index+ 1, progressArray.length));
    let addDone = this.state.done.concat([card]);

    this.setState({
      progress : removeProgress,
      done : addDone,
    })

  }

  moveBackwardProgress = (id) => {
    let index, card;
    let doneArray = this.state.done

    this.state.done.forEach((currentCard, cardIndex) => {
      if(currentCard.id === id){
        index = cardIndex;
        card = currentCard;
        card.status = "In Progress"
      }
    })

    let removeDone = this.state.done.slice(0, index)
                     .concat(this.state.done.slice(index+ 1, doneArray.length));
    let addProgress = this.state.progress.concat([card]);

    this.setState({
      progress : addProgress,
      done : removeDone,
    })

  }

  moveBackwardQueue = (id) => {
    let index, card;
    let progressArray = this.state.progress

    this.state.progress.forEach((currentCard, cardIndex) => {
      if(currentCard.id === id){
        index = cardIndex;
        card = currentCard;
        card.status = "Queue"
      }
    })

    let removeProgress = this.state.progress.slice(0, index)
                     .concat(this.state.progress.slice(index+ 1, progressArray.length));
    let addTodo = this.state.todo.concat([card]);

    this.setState({
      todo : addTodo,
      progress : removeProgress,
    })

  }

  componentWillMount() {
    const todo = [];
    const progress = [];
    const done = [];
    let allCards = this.props.cards;

    //  for(var i = 0; i<allCards.length; i++){
    //   if (allCards[i].status === "Queue"){
    //     todo.push(allCards[i]);
    //   }
    //   if (allCards[i].status === "In Progress"){
    //     progress.push(allCards[i]);
    //   }
    //   if (allCards[i].status === "Complete"){
    //     done.push(allCards[i]);
    //   }
    //  }

    //  this.setState({
    //   todo: todo,
    //   progress: progress,
    //   done: done
    // })
  }

  render(){

    return (
      <div>
        <h1>Kanban Board</h1>
        <NewCardForm addCard={this.addCard}/>
        <QueueColumn todo={this.props.todo} backward={()=> {}} />
        <ProgressColumn progress={this.props.progress} moveBackwardQueue={this.moveBackwardQueue} moveForwardDone={this.moveForwardDone} />
        <DoneColumn done={this.props.done} forward={()=> {}} moveBackwardProgress={this.moveBackwardProgress} />
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
    // addCard: card => {
    //   dispatch(addCard(card))
    // },
    // moveForward: card => {
    //   dispatch(moveForward(card))
    // }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
)(App);

export default ConnectedApp;