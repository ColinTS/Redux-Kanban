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
        cards : cards.concat(action.card)
      });

    case MOVE_FORWARD:
    console.log('action', action.data);
    console.log('props',state.cards);
      for (let key in state.cards){
        if(state.cards[key].id === action.data.id){
          state.cards[key].status = action.data.status;
          console.log('Progress?',state.cards[key]);
        }
      }
      return Object.assign({}, state, {

        // cards: action.status
      });



    default:
      return state;
  }
};

export default cards;