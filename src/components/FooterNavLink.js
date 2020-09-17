/**
 * The FooterNavLink component. An individual link in the navigation bar in the footer.
 * 
 * Props:
 *  link - the URL the link points to (String)
 *  children - text of the link (can be any object, but expected to be a String)
 */

import React from 'react';
import {Link} from 'react-router-dom';


export default function FooterNavLink(props) {
  return (
    <li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
      {/^https?:\/\//.test(props.link)
        ? <a className="usa-footer__primary-link" href={props.link}>{props.children}</a>
        : <Link className="usa-footer__primary-link" to={props.link}>{props.children}</Link>
      }
    </li>
  );
}
