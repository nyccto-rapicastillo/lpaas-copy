import React from 'react';
import {Link} from 'react-router-dom';


export default function FooterNavLink(props) {
  return (
    <li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
      {/^https?:\/\//.test(props.link)
        ? <a className="usa-footer__primary-link" href={props.link}>{props.label}</a>
        : <Link className="usa-footer__primary-link" to={props.link}>{props.label}</Link>
      }
    </li>
  );
}
