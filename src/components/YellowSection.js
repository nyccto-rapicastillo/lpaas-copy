import React from 'react';

export default function YellowSection(props) {
  return (
    <section id="test-section-id" className="usa-section grid-container">
      <div className="grid-row grid-gap">

        {props.children}

      </div>
    </section>
  );
}
