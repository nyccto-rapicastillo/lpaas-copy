import React from 'react';

export default function NavLink(props) {
  return (
    <li className="usa-nav__primary-item">
      <a className={`usa-nav__link ${props.isActive && 'usa-current'}`}
        href={props.link}>
        <span>{props.label}</span>
      </a>
    </li>
  );
}


