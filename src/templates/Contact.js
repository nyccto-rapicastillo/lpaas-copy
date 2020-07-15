import React from 'react';
import GovBanner from '../components/GovBanner';
import Header from '../components/Header';
import Hero from '../components/Hero';
import BlueSection from '../components/BlueSection';
import Footer from '../components/Footer';

export default function Contact(props) {
    return(
        <div>
            <GovBanner/>

            <Header currentPage={props.pageLabel}/>
    
            <main id="main-content" class={props.mainBg}>
                <Hero link={props.heroLink} bgImg={props.heroBg}/>
  
                <BlueSection heading={props.heading1} text={props.text1} buttonActive={props.buttonPresent}/>
  
            </main>

            <Footer returnBg={props.footerBg}/>

        </div>
    );
}


