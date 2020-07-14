import React from 'react';

export default function NavLink(props) {
    let className = 'usa-nav__link';
    if (props.isActive) {
        className += ' usa-current';
    }
    return(
        <li class="usa-nav__primary-item">
            <a class={className} href={props.link}>
                <span>{props.label}</span>
            </a>
        </li>
    );
}