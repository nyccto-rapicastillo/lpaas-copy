import React from 'react';
import GovBanner from '../components/GovBanner';
import Header from '../components/Header';
import Hero from '../components/Hero';
import YellowSection from '../components/YellowSection';
import Grid from '../components/Grid';
import BlueSection from '../components/BlueSection';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';

export default function Home(props) {
    return(
        <div>
            <GovBanner/>

            <Header currentPage={props.pageLabel}/>
    
            <main id="main-content" className={props.mainBg}>
                <Hero link={props.heroLink} bgImg={props.heroBg}/>
                
                <YellowSection>
                    <div className="tablet:grid-col-4">
                        <Heading style="margin-top-0 tablet:margin-bottom-0">
                            {props.heading1}
                        </Heading>
                    </div>

                    <Paragraph style="tablet:grid-col-8">
                        {props.text1}
                    </Paragraph>

                </YellowSection>
    
                <Grid 
                img1={props.gridImg1} alt1={props.gridAlt1} heading1={props.gridHeading1} text1={props.gridText1}
                img2={props.gridImg2} alt2={props.gridAlt2} heading2={props.gridHeading2} text2={props.gridText2}
                img3={props.gridImg3} alt3={props.gridAlt3} heading3={props.gridHeading3} text3={props.gridText3}
                img4={props.gridImg4} alt4={props.gridAlt4} heading4={props.gridHeading4} text4={props.gridText4}
                />

                <BlueSection>
                    <Heading style="margin-y-0">
                        {props.heading2}
                    </Heading>

                    <Paragraph style="usa-intro">
                        {props.text2}
                    </Paragraph>

                    <Button buttonLink={props.buttonLink}>{props.buttonText}</Button>

                </BlueSection>
  
            </main>

            <Footer returnBg="bg-unity-blue"/>

        </div>
    );
}