import React from 'react';

export default function BlueSection(props) {
  return (
    <section id="test-section-id" className="usa-section bg-unity-blue">
      <div className="grid-container">
        {props.children}
      </div>
    </section>
  );
}
