import React from 'react';

export default function FooterNavLink(props) {
    return (
        <li class="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
            <a class="usa-footer__primary-link" href={props.link}>{props.label}</a>
        </li>
    );
}