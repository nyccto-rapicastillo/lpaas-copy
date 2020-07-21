import React from 'react';
import GovBanner from '../components/GovBanner';
import Header from '../components/Header';
import Hero from '../components/Hero';
import YellowSection from '../components/YellowSection';
import Footer from '../components/Footer';
import YellowParagraph from '../components/YellowParagraph';
import YellowHeading from '../components/YellowHeading';

export default function About(props) {
    const YELLOW_SECTIONS = [
        {heading: `${props.heading1}`, text: `${props.text1}`},
        {heading: `${props.heading2}`, text: `${props.text2}`},
        {heading: `${props.heading3}`, text: `${props.text3}`}
    ]

    const yellowSections = YELLOW_SECTIONS.map((section) => 
    <YellowSection>
        <YellowHeading>
            {section.heading}
        </YellowHeading>

        <YellowParagraph>
            {section.text}
        </YellowParagraph>

    </YellowSection>)

    return (
        <div>
            <GovBanner/>

            <Header currentPage={props.pageLabel}/>
    
            <main id="main-content" class={props.mainBg}>
                <Hero link={props.heroLink} bgImg={props.heroBg}/>
                
                {yellowSections}
  
            </main>

            <Footer returnBg={props.footerBg}/>

        </div>
    );
}