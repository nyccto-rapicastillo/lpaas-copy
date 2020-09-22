/**
 * The HeadingLeftLayout component. A section on the page with heading floating to the left of all the other components.
 * 
 * Props:
 *  bg - a class name that indicates the color of the background (String)
 *  children - elements within the layout, including the heading and paragraph (can be any object, expecting a String)
 */

import React from 'react';

export default function HeadingLeftLayout(props) {
  return (
    <section id="test-section-id" className={`usa-section grid-container ${props.bg}`}>
      <div className="grid-row grid-gap">
        {props.children}
      </div>
    </section>
  );
}
