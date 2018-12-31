import "./Modal.css";
import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active modal-modal"
      >
        <div className="header">{props.name}</div>
        <div className="modal-body">
          <div className="modal-image">
            <img className="project-image" src={props.image} alt="project" />
          </div>
          <div className="content modal-Content">
            <p>{props.description}</p>
            <p>
              Technologies Used: <strong>{props.technologies}</strong>
            </p>
            <p>
              {props.linkDescription}
              <a target="_blank" rel="noopener noreferrer" href={props.link}>
                HERE!
              </a>
            </p>
          </div>
        </div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
