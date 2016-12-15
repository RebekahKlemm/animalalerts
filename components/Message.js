import React from 'react';

export default function (props) {
  return (
    <div className="message">
        <h3>Message appears below</h3>
        <h3>{ props.message.to }</h3>
        <h3>{ props.message.from }</h3>
        <h3>{ props.message.body }</h3>
    </div>
  );

}
