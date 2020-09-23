import React from 'react';

import PageTemplate from './PageTemplate';
import {BlueSection, Heading, Paragraph} from '../components';

import ContactImg from '../assets/img/_A3A3388_CMYK 1.png';

import {useTranslation} from 'react-i18next';

export default function Contact(props) {
  const {t} = useTranslation();

  return (
    <PageTemplate page="Contact" mainBg="bg-unity-blue" hero={ContactImg} returnBg="bg-unity-blue">
      <BlueSection>
        <Heading className="margin-y-0">
          {t('contactUs')}
        </Heading>
        <br/>
        <Paragraph className="usa-intro">
          {t('feedback')}

          <br/><br/><b>NYC Unity Project</b>
          <br/><a href="http://nyc.gov/unityproject">http://nyc.gov/unityproject</a>
          <br/>Twitter: <a href="https://twitter.com/NYCUnityProject">@NYCUnityProject</a>

          <br/><br/><b>NYC Center for Youth Employment</b>
          <br/><a href="http://nyc.gov/cye">http://nyc.gov/cye</a>
          <br/>Twitter: <a href="https://twitter.com/NYCCYE">@NYCCYE</a>
        </Paragraph>
      </BlueSection>
    </PageTemplate>
  );
}


