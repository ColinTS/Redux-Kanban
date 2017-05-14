import React from 'react';
import Card from './Card.js'

const CardList = ({ cards, forward, backward }) => (
  <ul>
    { cards
      .map( card => <Card key={card.id} card={card} forward={forward} backward={backward} /> )
    }
  </ul>
);

CardList.defaultProps = {
  cards : []
}
export default CardList;