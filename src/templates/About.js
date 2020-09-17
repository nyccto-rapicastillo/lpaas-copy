/**
 * The About page. Contains additional information about the Unity Project, the CYE, and important acknowledgements.
 */

import React from 'react';
import {useTranslation} from 'react-i18next';

// Import composite components
import PageTemplate from './PageTemplate';
import {HeadingLeftLayout, Paragraph, Heading} from '../components';

// Import related images
import AboutImg from '../assets/img/_A3A3659_CMYK\ 1.png';

export default function About(props) {
  const {t} = useTranslation();
  
  // The text for each section within the page
  const YELLOW_SECTIONS = [
    {heading: t('unityAbout'), text: t('unityDescription')},
    {heading: t('cyeAbout'), text: t('cyeDescription')},
    {heading: t('acknowledgements'), text: t('fullAcknowledgements')},
  ];

  // Renders each section
  const yellowSections = YELLOW_SECTIONS.map((section, i) =>
    // Color the section yellow //
    <HeadingLeftLayout key={`section-${i}`} bg="bg-unity-yellow">

      {/* Heading, floating to the left */}
      <div className="tablet:grid-col-4">
        <Heading className="margin-top-0 tablet:margin-bottom-0">
          {section.heading}
        </Heading>
      </div>

      {/* Paragraph */}
      <Paragraph className="tablet:grid-col-8">
        {section.text}
      </Paragraph>

    </HeadingLeftLayout>);

  return (
    <PageTemplate page="About" mainBg="bg-unity-yellow" hero={AboutImg} returnBg="bg-unity-yellow">
      {yellowSections}
    </PageTemplate>
  );
}
