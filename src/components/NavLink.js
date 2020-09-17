/**
 * The NavLink component. A link in the navigation bar at the top of the header.
 * 
 * Props:
 *  isActive - an indicator of whether this is the current page (Boolean)
 *  link - the URL (String)
 *  children - the text (can be any object, expecting a String)
 */

import React from 'react';
import {Link} from 'react-router-dom';

export default function NavLink(props) {
  return (
    <li className="usa-nav__primary-item">
      <Link className={`usa-nav__link ${props.isActive && 'usa-current'}`} to={props.link}>
        <span>{props.children}</span>
      </Link>
    </li>
  );
}


