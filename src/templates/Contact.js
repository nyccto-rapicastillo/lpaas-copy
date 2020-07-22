import React from 'react';
import GovBanner from '../components/GovBanner';
import Header from '../components/Header';
import Hero from '../components/Hero';
import BlueSection from '../components/BlueSection';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';

export default function Contact(props) {
    return(
        <div className={props.mainBg}>
            <GovBanner/>

            <Header currentPage={props.pageLabel}/>
    
            <main id="main-content" className={props.mainBg}>
                <Hero link={props.heroLink} bgImg={props.heroBg}/>
  
                <BlueSection>
                    <Heading style="margin-y-0">
                        {props.heading1}
                    </Heading>

                    <Paragraph style="usa-intro">
                        {props.text1}
                    </Paragraph>
                </BlueSection>
  
            </main>

            <Footer returnBg={props.footerBg}/>

        </div>
    );
}


