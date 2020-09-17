/**
 * The Home page. Contains informational sections about the report.
 */

import React from 'react';
import GoogleAnalytics from '../utils/GoogleAnalytics';
import {useTranslation} from 'react-i18next';
import {LANGUAGES} from '../i18n/config';

// Import composite components
import PageTemplate from './PageTemplate';
import {HeadingLeftLayout, Grid, HeadingTopLayout,
  Button, Heading, Paragraph, GridSquare} from '../components';

// Import related images
import HomeImg from '../assets/img/_A3A3537_CMYK\ 1.png';
import CircleImg1 from '../assets/img/GridImage1.png';
import CircleImg2 from '../assets/img/GridImage2.png';
import CircleImg3 from '../assets/img/GridImage3.png';
import CircleImg4 from '../assets/img/GridImage4.png';

export default function Home(props) {
  const {i18n, t} = useTranslation();

  return (
    <PageTemplate page="Home" mainBg="bg-unity-yellow"
      hero={HomeImg} returnBg="bg-unity-blue">

      {/* Yellow section at top with information about the need of the manual */}
      <HeadingLeftLayout bg="bg-unity-yellow">

        {/* Heading */}
        <div className="tablet:grid-col-4">
          <Heading className="margin-top-0 tablet:margin-bottom-0">
            {t('manualNeed')}
          </Heading>
        </div>

        {/* Body */}
        <Paragraph className="tablet:grid-col-8">
          {t('manualNeedDescription')}
        </Paragraph>

      </HeadingLeftLayout>

      {/* Middle grid section */}
      <Grid>

        {/* First Row */}
        <div className="usa-graphic-list__row grid-row grid-gap">
          <GridSquare img={CircleImg1} altText={t('conceptsAlt')}
            heading={t('conceptsHeading')}>
            {t('conceptsAndVocab')}
          </GridSquare>

          <GridSquare img={CircleImg2} alt={t('obligationsAlt')}
            heading={t('obligationsHeading')}>
            {t('obligations')}
          </GridSquare>
        </div>

        {/* Second Row */}
        <div className="usa-graphic-list__row grid-row grid-gap">
          <GridSquare img={CircleImg3} alt={t('safeSpaceAlt')}
            heading={t('safeSpaceHeading')}>
            {t('safeSpace')}
          </GridSquare>

          <GridSquare img={CircleImg4} alt={t('checkSafetyAlt')}
            heading={t('checkSafetyHeading')}>
            {t('checkSafety')}
          </GridSquare>

        </div>

      </Grid>

      {/* Blue section at bottom with button to download report */}
      <HeadingTopLayout bg="bg-unity-blue">

        {/* Heading */}
        <Heading className="margin-y-0">
          {t('fullReport')}
        </Heading>

        {/* Paragraph */}
        <br/>
        <Paragraph className="usa-intro">
          {t('fullReportDescription')}
        </Paragraph>

        {/* Button, with Google Analytics tracking */}
        <br/>
        <Button link="https://www1.nyc.gov/assets/lgbtqwork/downloads/unityproject_workforcemanual_v4.pdf" 
          onClick={()=> GoogleAnalytics.logEvent("Button Click", "User downloaded report")}>
            {t('downloadReport')}
        </Button>
        
      </HeadingTopLayout>

    </PageTemplate>
  );
}
