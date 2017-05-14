import React from 'react';
import { moveForward } from '../actions';


const Card = (props) => (
  <div className = "card">
    <h3>{ props.card.title }</h3>
    <p>{ props.card.priority }</p>
    <p>{ props.card.status}</p>
    <p>{ props.card.created_by }</p>
    <p>{ props.card.assigned_to }</p>
    <p>{ props.card.id }</p>
    <button id="backward" onClick = { props.backward.bind(this, props.card.id) }>backward</button>
    <button id="forward" onClick = { props.forward.bind(this, props.card.id) }>forward</button>
  </div>
);

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    moveForward: card => {
      dispatch(moveForward(card))
    }
  }
}

export default Card;