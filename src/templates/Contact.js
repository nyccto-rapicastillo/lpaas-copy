import React from 'react';
import GovBanner from '../components/GovBanner';
import Header from '../components/Header';
import Hero from '../components/Hero';
import BlueSection from '../components/BlueSection';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';

import ContactImg from "../assets/img/_A3A3388_CMYK 1.png";

import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../i18n/config';
import PageTemplate from './PageTemplate';

export default function Contact(props) {
    const { i18n, t } = useTranslation();

    return(
        <PageTemplate page="Contact" mainBg="bg-unity-blue" hero={ContactImg} returnBg="bg-unity-blue">
            <BlueSection>
                <Heading style="margin-y-0">
                    {t('contactUs')}
                </Heading>

                <Paragraph style="usa-intro">
                    {t('feedback')}
                    
                    <b>NYC Unity Project</b>
                    <a href="http://nyc.gov/unityproject">http://nyc.gov/unityproject</a>
                    <br/>Twitter: <a href="https://twitter.com/NYCUnityProject">@NYCUnityProject</a>
                    
                    <b>NYC Center for Youth Employment</b>
                    <a href="http://nyc.gov/cye">http://nyc.gov/cye</a>
                    <br/>Twitter: <a href="https://twitter.com/NYCCYE">@NYCCYE</a>
                </Paragraph>
            </BlueSection>
        </PageTemplate>
    );
}


