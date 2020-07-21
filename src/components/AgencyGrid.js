import React from 'react';
import UnityLogo from '../assets/img/nyc_unity_logo.png';
import CYELogo from '../assets/img/NYCYE.png';
import MayorsFundLogo from '../assets/img/mayorsfund.png';
import MOCTOLogo from '../assets/img/MOCTO.png';

export default function AgencyGrid(props) {
    return(
    <div class="grid-row grid-gap bg-unity-purple text-white">
        <div class="usa-footer__secondary-section bg-unity-purple text-white">
        <div class="grid-container bg-unity-purple text-white">
            <div class="grid-row grid-gap">
                <div class="agency-grid footer-text">
                    <a href="https://growingupnyc.cityofnewyork.us/generationnyc/topics/lgbtq/"><img class="agency-item agency-adjustment-first" src={UnityLogo} alt=""/></a>

                    <div class="agency-item">
                        <p>A collaboration of</p>
                        <a href="https://cye.cityofnewyork.us/"><img src={CYELogo} alt=""/></a>
                    </div>
                                
                    <a href="https://www1.nyc.gov/site/fund/index.page"><img class="agency-item agency-adjustment" src={MayorsFundLogo} alt=""/></a>

                    <div class="agency-item">
                        <p>Website created with the support of</p>
                        <a href="http://nyc.gov/cto"><img src={MOCTOLogo} alt=""/></a>
                    </div> 
                </div>

                <p/>
                    
                <p class="footer-text">
                    © 2020 City of New York. All Rights Reserved.
                    <br/>
                    NYC is a trademark and service mark of the City of New York
                </p>
            </div>
        </div>    
    </div>

    </div>
    );
}

