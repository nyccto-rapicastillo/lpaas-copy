import React from 'react';
import FooterNav from './FooterNav';
import AgencyGrid from './AgencyGrid';

export default function Footer(props) {
    let returnBgClass = "grid-container usa-footer__return-to-top "+props.returnBg;
    let footerBgClass = "usa-footer "+props.returnBg;
    return(
        <footer class={footerBgClass}>
            <div class={returnBgClass}>
                <a href="#">Return to top</a>
            </div>

            <FooterNav/>

            <AgencyGrid/>

        </footer>   
    );
}