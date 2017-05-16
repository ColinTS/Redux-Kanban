/*jshint esversion: 6*/
import {
  ADD_CARD,
  MOVE_FORWARD,
  MOVE_FORWARD_DONE,
  MOVE_BACKWARD_PROGRESS,
  MOVE_BACKWARD_QUEUE
} from '../actions';

const initialState = {
  cards : [
    {
      title: 'Read Dune',
      priority: 'High',
      status: 'Queue',
      id: "1",
      assigned_to: 'Colin',
      created_by: 'Colin'
    },
    {
      title: 'Walk Neo',
      priority: 'Low',
      status: 'In Progress',
      id: "2",
      assigned_to: 'Colin',
      created_by: 'Colin'
    },
    {
      title: 'Walk Morpheus',
      priority: 'Low',
      status: 'Done',
      id: "3",
      assigned_to: 'Colin',
      created_by: 'Colin'
    }
  ]

};
const cards = (state = initialState, action) => {
  // console.log("state", state);
  // console.log("action", action);

  switch(action.type){

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