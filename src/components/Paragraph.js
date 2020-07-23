import React from 'react';

export default function Paragraph(props) {
  return (
    <div className={`usa-prose ${props.style}`}>
      <p>{props.children}</p>
    </div>
  );
}
