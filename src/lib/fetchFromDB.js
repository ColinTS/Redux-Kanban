/*jshint esversion: 6*/
export const getAllCards = () => fetch('/api/cards', {
  method: 'GET',
  credentials: 'include'
}).then(res => res.json());