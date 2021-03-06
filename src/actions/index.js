/*jshint esversion: 6*/
import * as db from '../lib/fetchFromDB';
export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const MOVE_FORWARD = 'MOVE_FORWARD';
export const MOVE_FORWARD_DONE = 'MOVE_FORWARD_DONE';
export const MOVE_BACKWARD_PROGRESS = 'MOVE_BACKWARD_PROGRESS';
export const MOVE_BACKWARD_QUEUE = 'MOVE_BACKWARD_QUEUE';

export const loadCards = () => {
  return dispatch => {
    return db.getAllCards()
      .then(cards => {
        dispatch({
          type: LOAD_CARDS,
          cards
        });
      })
      .catch(console.log);
  };

};

export const addCard = card => {
  return dispatch => {
    return db.createCard(card)
      .then(card => {
        console.log('card',card);
        dispatch({
          type: ADD_CARD,
          card
        });
      })
      .catch(console.log);
  };
};


export const moveForward = card => {
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

export const moveForwardDone = card => {
   const cardResult = {
      title: card.title,
      priority: card.priority,
      created_by: card.created_by,
      assigned_to: card.assigned_to,
      id: card.id,
      status: 'Done'
    };

  return {
    type: MOVE_FORWARD_DONE,
    data: cardResult
  };

};

export const moveBackwardProgress = card => {
   const cardResult = {
      title: card.title,
      priority: card.priority,
      created_by: card.created_by,
      assigned_to: card.assigned_to,
      id: card.id,
      status: 'In Progress'
    };

  return {
    type: MOVE_BACKWARD_PROGRESS,
    data: cardResult
  };

};

export const moveBackwardQueue = card => {
   const cardResult = {
      title: card.title,
      priority: card.priority,
      created_by: card.created_by,
      assigned_to: card.assigned_to,
      id: card.id,
      status: 'Queue'
    };

  return {
    type: MOVE_BACKWARD_QUEUE,
    data: cardResult
  };

};