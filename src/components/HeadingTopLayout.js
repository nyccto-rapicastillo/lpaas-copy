/**
 * The HeadingTopLayout component. A section on the page with heading ontop of all the other components.
 * 
 * Props:
 *  bg - a class name that indicates the color of the background (String)
 *  children - elements within the layout, including the heading and paragraph (can be any object, expecting a String)
 */

import React from 'react';

export default function HeadingTopLayout(props) {
  return (
    <section id="test-section-id" className={`usa-section ${props.bg}`}>
      <div className="grid-container">
        {props.children}
      </div>
    </section>
  );
}
