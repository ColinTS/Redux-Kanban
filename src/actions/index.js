/*jshint esversion: 6*/
export const ADD_CARD = 'ADD_CARD';
export const MOVE_FORWARD = 'MOVE_FORWARD';

export const addCard = card => {

  return {
    type: ADD_CARD,
    card
  };

};

export const moveForward = card => {
  console.log(card);
   const cardResult = {
      title: card.title,
      priority: card.priority,
      created_by: card.created_by,
      assigned_to: card.assigned_to,
      id: card.id,
      status: 'In Progress'
    };

  return {
    type: MOVE_FORWARD,
    data: cardResult
  };

};