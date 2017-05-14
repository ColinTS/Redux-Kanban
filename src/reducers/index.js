/*jshint esversion: 6*/
import {
  ADD_CARD,
  MOVE_FORWARD
} from '../actions';

const initialState = {
  cards : [
    {
      title: 'Read Dune',
      priority: 'High',
      status: 'Queue'
    },
    {
      title: 'Walk Neo',
      priority: 'Low',
      status: 'In Progress'
    },
    {
      title: 'Walk Morpheus',
      priority: 'Low',
      status: 'Done'
    }
  ]

};
const cards = (state = initialState, action) => {
  console.log("state", state);
  console.log("action", action);

  switch(action.type){

    case ADD_CARD:
      return Object.assign({}, state, {
        cards : cards.concat(action.card)
      });

    case MOVE_FORWARD:

    return state;
      // let index, card;
      // let todoArray = this.state.todo;

      // this.state.todo.forEach((currentCard, cardIndex) => {
      //   if(currentCard.id === id){
      //     index = cardIndex;
      //     card = currentCard;
      //     card.status = "In Progress";
      //   }
      // });

      // let removeTodo = this.state.todo.slice(0, index)
      //                  .concat(this.state.todo.slice(index+ 1, todoArray.length));
      // let addProgress = this.state.progress.concat([card]);

      // return Object.assign({}, state, {
      //   cards :
      // });


    default:
      return state;
  }
};

export default cards;