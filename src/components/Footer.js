import React from 'react';
import FooterNav from './FooterNav';
import UnityLogo from '../assets/img/nyc_unity_logo.png';
import CYELogo from '../assets/img/NYCYE.png';
import MayorsFundLogo from '../assets/img/mayorsfund.png';
import MOCTOLogo from '../assets/img/MOCTO.png';
import AgencyGrid from './AgencyGrid';

export default function Footer(props) {
    let returnBgClass = "grid-container usa-footer__return-to-top "+props.returnBg;
    let footerBgClass = "usa-footer "+props.returnBg;
    return(
        <footer class={footerBgClass}>
            <div class={returnBgClass}>
                <a href="#">Return to top</a>
            </div>
            
            <FooterNav
            link1="/" label1="Home"
            link2="/" label2="About"
            link3="/" label3="Contact"
            link4="/" label4="Privacy Policy"
            link5="/" label5="Terms of Use"/>

            <AgencyGrid bg="bg-unity-purple" text="text-white" logo1={UnityLogo}
            logo2text="A collaboration of" logo2={CYELogo}
            logo3={MayorsFundLogo}
            logo4text="Website created with the support of" logo4={MOCTOLogo}
            trademarkText={["© 2020 City of New York. All Rights Reserved.",<br/>,"NYC is a trademark and service mark of the City of New York"]}/>

        </footer>   
    );
}