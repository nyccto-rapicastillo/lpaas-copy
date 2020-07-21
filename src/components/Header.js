import React from 'react';
import NavLink from './NavLink';

export default function Header(props) {

    const NAV_LINKS = [
        {link: "/", label: "Home"},
        {link:"/about", label: "About"},
        {link: "/contact", label: "Contact"}
    ];

    const navItems = NAV_LINKS.map((item) =>
        <NavLink
            isActive = {`${props.currentPage}` == `${item.label}`} 
            link={item.link}
            label={item.label}
        />
    );

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
                            {navItems}
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
}