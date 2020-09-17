/**
 * The Hero component. The Hero callout, with a bold image and callout to draw the user's attention to the most important information.
 * For the Unity Site, contains text and a button to download the report.
 * 
 * Props: 
 *  bgImg - the background image for the callout (React component)
 */

import React from 'react';
import {useTranslation} from 'react-i18next';
// import {LANGUAGES} from '../i18n/config';
import GoogleAnalytics from '../utils/GoogleAnalytics';


// Import composite components
import Button from './Button';

export default function Hero(props) {
  const {t} = useTranslation();

  return (
    <div className="usa-hero" aria-label="Introduction"
      style={{backgroundImage: `url('${props.bgImg}')`}}>
      <div className="grid-container">
        <div className="usa-hero__callout">

          {/* Heading */}
          <h1 className="usa-hero__heading">
            <span className="usa-hero__heading--alt text-barlow-logo text-unity-blue">
              {t('workItNYC')}
              <br/>
              <span className="text-accent-cool">
                {t('inclusivityGuide')}
              </span>
            </span>
          </h1>

          {/* Button, with tracking connected to Google Analyics */}
          <Button link="https://www1.nyc.gov/assets/lgbtqwork/downloads/unityproject_workforcemanual_v4.pdf" 
          onClick={()=> GoogleAnalytics.logEvent("Button Click", "User downloaded report")}>
            {t('downloadReport')}
          </Button>

        </div>
      </div>
    </div>
  );
}
