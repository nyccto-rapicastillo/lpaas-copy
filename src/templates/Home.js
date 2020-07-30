import React from 'react';
import GoogleAnalytics from '../utils/GoogleAnalytics';

import PageTemplate from './PageTemplate';
import {YellowSection, Grid, BlueSection,
  Button, Heading, Paragraph, GridSquare} from '../components';

import HomeImg from '../assets/img/_A3A3537_CMYK\ 1.png';
import CircleImg1 from '../assets/img/GridImage1.png';
import CircleImg2 from '../assets/img/GridImage2.png';
import CircleImg3 from '../assets/img/GridImage3.png';
import CircleImg4 from '../assets/img/GridImage4.png';

import {useTranslation} from 'react-i18next';
import {LANGUAGES} from '../i18n/config';

export default function Home(props) {
  const {i18n, t} = useTranslation();

  return (
    <PageTemplate page="Home" mainBg="bg-unity-yellow"
      hero={HomeImg} returnBg="bg-unity-blue">
      <YellowSection>
        <div className="tablet:grid-col-4">
          <Heading style="margin-top-0 tablet:margin-bottom-0">
            {t('manualNeed')}
          </Heading>
        </div>

        <Paragraph style="tablet:grid-col-8">
          {t('manualNeedDescription')}
        </Paragraph>
      </YellowSection>

      <Grid>
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

      <BlueSection>
        <Heading style="margin-y-0">
          {t('fullReport')}
        </Heading>
        <br/>
        <Paragraph style="usa-intro">
          {t('fullReportDescription')}
        </Paragraph>
        <br/>
        <Button link="/" 
          onClick={()=> GoogleAnalytics.logEvent("Button Click", "User downloaded report")}>
            {t('downloadReport')}
        </Button>
      </BlueSection>

    </PageTemplate>
  );
}
