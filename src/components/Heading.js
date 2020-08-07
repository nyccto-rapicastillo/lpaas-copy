/**
 * The Heading component. The generic heading for the major sections.
 * 
 * props:
 *  style - additional class stylings to adjust the heading to each section (designed specifically for the HeadingTop and HeadingLeft layouts) (String)
 *  children - the text of the heading (can be any object, expecting a String)
 */

import React from 'react';

export default function Heading(props) {
  return (
    <h2 className={`font-heading-xl text-barlow-heading 
    text-primary-darker ${props.style}`}>
      {props.children}
    </h2>
  );
}
