import React from 'react';
import PageTemplate from './PageTemplate';
import YellowSection from '../components/YellowSection';
import Paragraph from '../components/Paragraph';
import Heading from '../components/Heading';

import { useTranslation } from 'react-i18next';

import AboutImg from "../assets/img/_A3A3659_CMYK\ 1.png";

export default function About(props) {

    const { i18n, t } = useTranslation();

    const YELLOW_SECTIONS = [
        {heading: t('unityAbout'), text: t('unityDescription')},
        {heading: t('cyeAbout'), text: t('cyeDescription')},
        {heading: t('acknowledgements'), text: t('fullAcknowledgements')}
    ]

    const yellowSections = YELLOW_SECTIONS.map((section) => 
    <YellowSection>
        <div className="tablet:grid-col-4">
            <Heading style="margin-top-0 tablet:margin-bottom-0">
                {section.heading}
            </Heading>
        </div>

        <Paragraph style="tablet:grid-col-8">
            {section.text}
        </Paragraph>

    </YellowSection>)

    return (

        <PageTemplate 
        page="About" mainBg="bg-unity-yellow" 
        hero={AboutImg} 
        returnBg="bg-unity-yellow">
            {yellowSections}
        </PageTemplate>
    );
}