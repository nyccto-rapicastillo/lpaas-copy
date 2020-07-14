import React from 'react';
import GovBanner from '../components/GovBanner';
import Header from '../components/Header';
import Hero from '../components/Hero';
import BlueSection from '../components/BlueSection';
import Footer from '../components/Footer';

export default function Contact() {
    return(
        <div>
            <GovBanner/>

            <Header homeActive={false} aboutActive={false} contactActive={true}/>
    
            <main id="main-content" class="bg-unity-yellow">
                <Hero link="/" bgImg="bg-unity-contact"/>
  
                <BlueSection heading="Contact us" 
                text={["To learn more about this project and the partners, please find our information below. We welcome your thoughts and feedback.", 
                <div><p><strong>NYC Unity Project</strong><br/><a href="https://nyc.gov/unityproject">nyc.gov/unityproject</a>
                <br/>Twitter: <a href="https://twitter.com/NYCUnityProject">@NYCUnityProject</a>
                </p><b>NYC Center for Youth Employment</b>
                <br/><a href="https://nyc.gov/cye">nyc.gov/cye</a>
                <br/>Twitter: <a href="https://twitter.com/NYCCYE">@NYCCYE</a></div>]} 
                buttonActive={false}/>
  
            </main>

            <Footer returnBg="bg-unity-blue"/>

        </div>
    );
}


// nyc.gov/unityproject
// Twitter: @NYCUnityProject

// NYC Center for Youth Employment
// nyc.gov/cye
// Twitter: @nyccye


