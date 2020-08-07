/**
 * The NavLink component. A link in the navigation bar at the top of the header.
 * 
 * Props:
 *  isActive - an indicator of whether this is the current page (Boolean)
 *  link - the URL (String)
 *  children - the text (can be any object, expecting a String)
 */

import React from 'react';

export default function NavLink(props) {
  return (
    <li className="usa-nav__primary-item">
      <a className={`usa-nav__link ${props.isActive && 'usa-current'}`} href={props.link}>
        <span>{props.children}</span>
      </a>
    </li>
  );
}


