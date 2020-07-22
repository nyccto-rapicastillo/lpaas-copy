import React from 'react';
import GovBanner from '../components/GovBanner';
import Header from '../components/Header';
import Hero from '../components/Hero';
import YellowSection from '../components/YellowSection';
import Footer from '../components/Footer';
import Paragraph from '../components/Paragraph';
import Heading from '../components/Heading';

export default function About(props) {
    const YELLOW_SECTIONS = [
        {heading: `${props.heading1}`, text: `${props.text1}`},
        {heading: `${props.heading2}`, text: `${props.text2}`},
        {heading: `${props.heading3}`, text: `${props.text3}`}
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
        <div>
            <GovBanner/>

            <Header currentPage={props.pageLabel}/>
    
            <main id="main-content" className={props.mainBg}>
                <Hero link={props.heroLink} bgImg={props.heroBg}/>
                
                {yellowSections}
  
            </main>

            <Footer returnBg={props.footerBg}/>

        </div>
    );
}