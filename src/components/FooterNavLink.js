/**
 * The FooterNavLink component. An individual link in the navigation bar in the footer.
 * 
 * Props:
 *  link - the URL the link points to (String)
 *  children - text of the link (can be any object, but expected to be a String)
 */

import React from 'react';

export default function FooterNavLink(props) {
  return (
    <li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
      <a className="usa-footer__primary-link" href={props.link}>{props.children}</a>
    </li>
  );
}
