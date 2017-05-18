/*jshint esversion: 6*/
export const getAllCards = () => fetch('/api/cards', {
  method: 'GET',
  credentials: 'include'
}).then(res => res.json());

export const createCard = (cardObj) => fetch('api/cards', {
  method: 'POST',
  credentials: 'include',
   headers: new Headers({
      'Content-Type': 'application/json'
    }),
  body: JSON.stringify(cardObj)
}).then(res => res.json());