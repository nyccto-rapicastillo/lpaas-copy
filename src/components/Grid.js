/**
 * The Grid component. The container for a grid layout.
 * 
 * Props:
 *  children - all the individual Grid Squares/rows (can be any object, expected to be GridSquare components and other divs)
 */

import React from 'react';

export default function Grid(props) {
  return (
    <section className="usa-graphic-list usa-section usa-section--dark">
      <div className="grid-container">
        {props.children}
      </div>
    </section>
  );
}
