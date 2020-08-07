/**
 * The Agency Grid component: displays all the agencies that collaborated for the project. 
 * Credit section at the bottom of each page.
 */

import React from 'react';
import {useTranslation} from 'react-i18next';
import {LANGUAGES} from '../i18n/config';

// Import related agency images
import UnityLogo from '../assets/img/nyc_unity_logo.png';
import CYELogo from '../assets/img/NYCYE.png';
import MayorsFundLogo from '../assets/img/mayorsfund.png';
import MOCTOLogo from '../assets/img/MOCTO.png';

export default function AgencyGrid(props) {
  const {i18n, t} = useTranslation();

  return (
    <div className="usa-footer__secondary-section bg-unity-purple text-white">
      <div className="grid-container bg-unity-purple text-white">
        <div className="grid-row grid-gap">

          {/* Grid of Agencies */}
          <div className="agency-grid footer-text grid-row grid-gap">

            {/* Unity Project Logo */}
            <a className="mobile-lg:grid-col-4 desktop:grid-col-3"
              href="http://nyc.gov/unityproject">
              <img className="agency-item agency-adjustment-first" src={UnityLogo} alt=""/>
            </a>

            {/* Center for Youth Employment Logo */}
            <div className="mobile-lg:grid-col-4 desktop:grid-col-3">
              <p>{t('collaboration')}</p>
              <a href="http://nyc.gov/cye">
                <img src={CYELogo} alt="" style={{maxWidth: 200}} />
              </a>
            </div>

            {/* NYC Mayor's Fund Logo */}
            <a className="mobile-lg:grid-col-4 desktop:grid-col-3"
              href="http://nyc.gov/fund">
              <img src={MayorsFundLogo} alt=""
                style={{maxWidth: 200, marginBottom: -2}} />
            </a>

            {/* NYC MoCTO Logo */}
            <div className="mobile-lg:grid-col-4 desktop:grid-col-3">
              <p style={{whiteSpace: 'nowrap'}}>{t('websiteSupport')}</p>
              <a href="http://nyc.gov/cto"><img src={MOCTOLogo} style={{maxWidth: 200}} alt=""/></a>
            </div>

          </div>

          {/* Footer Text - Trademarks, etc */}
          <p className="footer-text">
            {t('allRightsReserved')}
            <br/>
            {t('tradeMark')}
          </p>

        </div>
      </div>
    </div>

  );
}
