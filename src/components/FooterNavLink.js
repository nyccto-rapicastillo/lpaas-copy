import React from 'react';
import {Link} from 'react-router-dom';


export default function FooterNavLink({ label, link}) {
  return (
    <li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
      {/^https?:\/\//.test(link)
        ? <a className="usa-footer__primary-link" href={link}>{label}</a>
        : <Link className="usa-footer__primary-link" to={link}>{label}</Link>
      }
    </li>
  );
}
