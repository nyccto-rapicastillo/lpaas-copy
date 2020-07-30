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
