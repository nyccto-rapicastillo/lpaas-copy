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
            <div className="usa-overlay"></div>
            <header className="usa-header usa-header--extended bg-unity-blue">
                <div className="usa-navbar">
                    <div className="usa-logo" id="extended-logo">
                        <em className="usa-logo__text"><a href="/" title="Home" aria-label="Home" className="text-primary-darker text-barlow-logo">The NYC Unity Project Guide to LGBTQI+ Workplace Inclusivity</a></em>
                    </div>
                    <button className="usa-menu-btn">Menu</button>
                </div>
                <nav aria-label="Primary navigation" className="usa-nav bg-white">
                    <div className="usa-nav__inner">
                        <button className="usa-nav__close">
                            <img src="../assets/img/close.svg" role="img" alt="close"/>
                        </button>
                        <ul className="usa-nav__primary usa-accordion">
                            {navItems}
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
}