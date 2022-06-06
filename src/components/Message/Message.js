import React from "react";
import "../Message/Message.css";

export default function Message(props) {
  return (
    <div className='message-wrapper'>
      <span>{props.message}</span>
      <button className='cancel-btn' onClick={() => props.cancel()}>
        x
      </button>
    </div>
  );
}
