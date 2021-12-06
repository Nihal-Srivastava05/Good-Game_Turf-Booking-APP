import React from 'react';

import './Modal.css';

const modal = props => (
  <div className="custom-modal">
    <header className="custom-modal__header">
      <h1>{props.title}</h1>
    </header>
    <section className="custom-modal__content">{props.children}</section>
    <section className="custom-modal__actions">
      {props.canCancel && (
        <button className="cust-btn" onClick={props.onCancel}>
          Cancel
        </button>
      )}
      {props.canConfirm && (
        <button className="cust-btn" onClick={props.onConfirm}>
          {props.confirmText}
        </button>
      )}
    </section>
  </div>
);

export default modal;
