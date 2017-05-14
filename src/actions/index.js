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

  return {
    type: MOVE_FORWARD,
    card
  };

};