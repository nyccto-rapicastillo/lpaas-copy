import React from 'react';

export default function Paragraph(props) {
  return (
    <div className={`usa-prose ${props.className}`}>
      <p>{props.children}</p>
    </div>
  );
}
