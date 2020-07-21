import React from 'react';
import GovBanner from '../components/GovBanner';
import Header from '../components/Header';
import Hero from '../components/Hero';
import BlueSection from '../components/BlueSection';
import Footer from '../components/Footer';
import Button from '../components/Button';

export default function Contact(props) {
    return(
        <div>
            <GovBanner/>

            <Header currentPage={props.pageLabel}/>
    
            <main id="main-content" class={props.mainBg}>
                <Hero link={props.heroLink} bgImg={props.heroBg}/>
  
                <BlueSection>
                    <h2 class="font-heading-xl margin-y-0 text-barlow-heading text-primary-darker">{props.heading1}</h2>
                    <p class="usa-intro usa-prose">{props.text1}</p>
                </BlueSection>
  
            </main>

            <Footer returnBg={props.footerBg}/>

        </div>
    );
}


