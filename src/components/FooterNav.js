import React from 'react';
import FooterNavLink from './FooterNavLink';

export default function FooterNav(props) {
    return (
        <div class="usa-footer__primary-section">
            <nav class="usa-footer__nav" aria-label="Footer navigation">
                <ul class="grid-row grid-gap">
                    <FooterNavLink link={props.link1} label={props.label1}/>

                    <FooterNavLink link={props.link2} label={props.label2}/>
                    
                    <FooterNavLink link={props.link3} label={props.label3}/>

                    <FooterNavLink link={props.link4} label={props.label4}/>
                    
                    <FooterNavLink link={props.link5} label={props.label5}/>
                </ul>
            </nav>
    </div>  
    );
}