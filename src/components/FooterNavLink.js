import React from 'react';
import { Link } from 'react-router-dom';

export default function FooterNavLink({ label, ...props}) {
  return (
    <li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
      {
        props.to && <Link className="usa-footer__primary-link" {...props}>{label}</Link>
      }
      { 
        props.href && <a className="usa-footer__primary-link" {...props}>{label}</a>
      }
    </li>
  );
}
