/*jshint esversion: 6*/
import React from 'react';
import { connect } from 'react-redux';



const Card = (props) => (
  <div className = "card">
    <h3>{ props.card.title }</h3>
    <p>{ props.card.priority } Priority</p>
    <p>{ props.card.status}</p>
    <p>Created by { props.card.Creator.username }</p>
    <p>Assigned to { props.card.Assigned.username }</p>
    <p>{ props.card.id }</p>
    <button id="backward" onClick = { props.backward.bind(this, props.card) }>backward</button>
    <button id="forward" onClick = { props.forward.bind(this, props.card) }>forward</button>
  </div>
);

Card.defaultProps = {
  forward: () => {},
}

export default Card;