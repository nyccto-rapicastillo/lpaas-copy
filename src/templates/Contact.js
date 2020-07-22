import React from 'react';
import GovBanner from '../components/GovBanner';
import Header from '../components/Header';
import Hero from '../components/Hero';
import BlueSection from '../components/BlueSection';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';

import ContactImg from "./assets/img/_A3A3388_CMYK 1.png";

export default function Contact(props) {
    return(
        <div className="bg-unity-yellow">
            <GovBanner/>

            <Header currentPage="Contact"/>
    
            <main id="main-content" className="bg-unity-yellow">
                <Hero bgImg={ContactImg}/>
  
                <BlueSection>
                    <Heading style="margin-y-0">
                    Contact us
                    </Heading>

                    <Paragraph style="usa-intro">
                        To learn more about this project and the partners, please find our information below. We welcome your thoughts and feedback.
                        
                        <h4>NYC Unity Project</h4>
                        <a href="http://nyc.gov/unityproject">http://nyc.gov/unityproject</a>
                        <br/>Twitter: <a href="https://twitter.com/NYCUnityProject">@NYCUnityProject</a>
                        
                        <h4>NYC Center for Youth Employment</h4>
                        <a href="http://nyc.gov/cye">http://nyc.gov/cye</a>
                        <br/>Twitter: <a href="https://twitter.com/NYCCYE">@NYCCYE</a>
                    </Paragraph>
                </BlueSection>
  
            </main>

            <Footer returnBg="bg-unity-blue"/>

        </div>
    );
}


