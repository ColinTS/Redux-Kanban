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
  // console.log("state", state);
  // console.log("action", action);

  switch(action.type){

    case ADD_CARD:
      return Object.assign({}, state, {
        cards : cards.concat(action.card)
      });

    case MOVE_FORWARD:
    console.log('action', action.data);
      return Object.assign({}, state, {
        cards: action.status
      });



    default:
      return state;
  }
};

export default cards;