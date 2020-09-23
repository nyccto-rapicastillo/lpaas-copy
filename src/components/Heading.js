import React from 'react';

export default function Heading(props) {
  return (
    <h2 className={`font-heading-xl text-barlow-heading text-primary-darker ${props.className}`}>
      {props.children}
    </h2>
  );
}
