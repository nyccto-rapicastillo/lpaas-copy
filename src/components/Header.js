import React from 'react';
import NavLink from './NavLink';

export default function Header(props) {
    return (
        <div>
            <div class="usa-overlay"></div>
            <header class="usa-header usa-header--extended bg-unity-blue">
                <div class="usa-navbar">
                    <div class="usa-logo" id="extended-logo">
                        <em class="usa-logo__text"><a href="/" title="Home" aria-label="Home" class="text-primary-darker text-barlow-logo">The NYC Unity Project Guide to LGBTQI+ Workplace Inclusivity</a></em>
                    </div>
                    <button class="usa-menu-btn">Menu</button>
                </div>
                <nav aria-label="Primary navigation" class="usa-nav bg-white">
                    <div class="usa-nav__inner">
                        <button class="usa-nav__close">
                            <img src="../assets/img/close.svg" role="img" alt="close"/>
                        </button>
                        <ul class="usa-nav__primary usa-accordion">
                            <NavLink isActive={props.currentPage === "home"} link="/" label="Home" />

                            <NavLink isActive={props.currentPage === "about"} link="/about" label="About" />

                            <NavLink isActive={props.currentPage === "contact"} link="/contact" label="Contact" />
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
}