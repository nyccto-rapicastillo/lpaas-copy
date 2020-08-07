/**
 * The Paragraph component. A standard paragraph.
 * 
 * Props:
 *  style - any additional class stylings (String)
 *  children - the text of the paragraph (can be any object, expecting a String)
 */

import React from 'react';

export default function Paragraph(props) {
  return (
    <div className={`usa-prose ${props.style}`}>
      <p>{props.children}</p>
    </div>
  );
}
