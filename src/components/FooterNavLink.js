import React from 'react';

export default function FooterNavLink(props) {
  return (
    <li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
      <a className="usa-footer__primary-link" href={props.link}>{props.label}</a>
    </li>
  );
}
