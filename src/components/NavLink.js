import React from 'react';
import { Link } from 'react-router-dom';

export default function NavLink(props) {
  return (
    <li className="usa-nav__primary-item">
      <Link className={`usa-nav__link ${props.isActive && 'usa-current'}`}
        to={props.link}>
        <span>{props.label}</span>
      </Link>
    </li>
  );
}


