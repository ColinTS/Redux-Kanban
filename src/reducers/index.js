/*jshint esversion: 6*/
import {
  ADD_CARD,
  MOVE_FORWARD,
  MOVE_FORWARD_DONE,
  MOVE_BACKWARD_PROGRESS,
  MOVE_BACKWARD_QUEUE,
  LOAD_CARDS
} from '../actions';

const initialState = {
  cards : []
};

const cards = (state = initialState, action) => {

  switch(action.type){

    case LOAD_CARDS:
      return Object.assign({}, state, {
        cards : action.cards
      });

    case ADD_CARD:
      return Object.assign({}, state, {
        cards : state.cards.concat(action.card)
      });

    case MOVE_FORWARD:
      for (let key in state.cards){
        if(state.cards[key].id === action.data.id){
          state.cards[key].status = action.data.status;

        }
      }
      return Object.assign({}, state);

    case MOVE_FORWARD_DONE:
      for (let key in state.cards){
        if(state.cards[key].id === action.data.id){
          state.cards[key].status = action.data.status;

        }
      }
      return Object.assign({}, state);

    case MOVE_BACKWARD_PROGRESS:
      for (let key in state.cards){
        if(state.cards[key].id === action.data.id){
          state.cards[key].status = action.data.status;

        }
      }
      return Object.assign({}, state);

     case MOVE_BACKWARD_QUEUE:
      for (let key in state.cards){
        if(state.cards[key].id === action.data.id){
          state.cards[key].status = action.data.status;

        }
      }
      return Object.assign({}, state);



    default:
      return state;
  }
};

export default cards;