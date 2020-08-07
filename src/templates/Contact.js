/**
 * The Contact page. Contains one section with all the contact information for the involved agencies.
 */

import React from 'react';
import {useTranslation} from 'react-i18next';
import {LANGUAGES} from '../i18n/config';

// Import composite components
import PageTemplate from './PageTemplate';
import {HeadingTopLayout, Heading, Paragraph} from '../components';

// Import relevant images
import ContactImg from '../assets/img/_A3A3388_CMYK 1.png';

export default function Contact(props) {
  const {i18n, t} = useTranslation();

  return (
    <PageTemplate page="Contact" mainBg="bg-unity-blue" hero={ContactImg} returnBg="bg-unity-blue">

      {/* Top layout, styled with blue background */}
      <HeadingTopLayout bg="bg-unity-blue">

        {/* Heading */}
        <Heading style="margin-y-0">
          {t('contactUs')}
        </Heading>

        <br/>

        {/* Body */}
        <Paragraph style="usa-intro">

          {t('feedback')}

          {/* Unity Project contact info */}
          <p/><b>NYC Unity Project</b>
          <br/><a href="http://nyc.gov/unityproject">http://nyc.gov/unityproject</a>
          <br/>Twitter: <a href="https://twitter.com/NYCUnityProject">@NYCUnityProject</a>

          {/* CYE contact info */}
          <p/><b>NYC Center for Youth Employment</b>
          <br/><a href="http://nyc.gov/cye">http://nyc.gov/cye</a>
          <br/>Twitter: <a href="https://twitter.com/NYCCYE">@NYCCYE</a>

        </Paragraph>

      </HeadingTopLayout>
      
    </PageTemplate>
  );
}


