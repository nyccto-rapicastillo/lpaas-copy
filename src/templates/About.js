import React from 'react';
import GovBanner from '../components/GovBanner';
import Header from '../components/Header';
import Hero from '../components/Hero';
import YellowSection from '../components/YellowSection';
import Footer from '../components/Footer';

export default function About(props) {
    return (
        <div>
            <GovBanner/>

            <Header currentPage={props.pageLabel}/>
    
            <main id="main-content" class={props.mainBg}>
                <Hero link={props.heroLink} bgImg={props.heroBg}/>
                
                <YellowSection heading={props.heading1} text={props.text1}/>
    
                <YellowSection heading={props.heading2} text={props.text2}/>
  
                <YellowSection heading={props.heading3} text={props.text3}/>
  
            </main>

            <Footer returnBg={props.footerBg}/>

        </div>
    );
}