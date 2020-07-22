import React from 'react';
import UnityLogo from '../assets/img/nyc_unity_logo.png';
import CYELogo from '../assets/img/NYCYE.png';
import MayorsFundLogo from '../assets/img/mayorsfund.png';
import MOCTOLogo from '../assets/img/MOCTO.png';

export default function AgencyGrid(props) {
    return(
        <div class="usa-footer__secondary-section bg-unity-purple text-white">
        <div class="grid-container bg-unity-purple text-white">
            <div class="grid-row grid-gap">
                <div class="agency-grid footer-text grid-row grid-gap">
                    <a className="mobile-lg:grid-col-4 desktop:grid-col-3" href="https://growingupnyc.cityofnewyork.us/generationnyc/topics/lgbtq/">
                        <img class="agency-item agency-adjustment-first" src={UnityLogo} alt=""/>
                    </a>

                    <div class=" mobile-lg:grid-col-4 desktop:grid-col-3">
                        <p>A collaboration of</p>
                        <a href="https://cye.cityofnewyork.us/">
                            <img src={CYELogo} alt="" style={{maxWidth: 200}} />
                        </a>
                    </div>
                                
                    <a className="mobile-lg:grid-col-4 desktop:grid-col-3"
                        href="https://www1.nyc.gov/site/fund/index.page">
                        <img class="" src={MayorsFundLogo} alt="" style={{maxWidth: 200, marginBottom: -2}} />
                    </a>

                    <div className="mobile-lg:grid-col-4 desktop:grid-col-3">
                        <p style={{whiteSpace: 'nowrap'}}>Website created with the support of</p>
                        <a href="http://nyc.gov/cto"><img src={MOCTOLogo} style={{maxWidth: 200}} alt=""/></a>
                    </div> 
                </div>
                <p class="footer-text">
                    © 2020 City of New York. All Rights Reserved.
                    <br/>
                    NYC is a trademark and service mark of the City of New York
                </p>
            </div>
        </div>    
    </div>

    );
}

