import React from 'react';
import GovBanner from '../components/GovBanner';
import Header from '../components/Header';
import Hero from '../components/Hero';
import YellowSection from '../components/YellowSection';
import Grid from '../components/Grid';
import BlueSection from '../components/BlueSection';
import Footer from '../components/Footer';

export default function Home() {
    return(
        <div>
            <GovBanner/>

            <Header homeActive={true} aboutActive={false} contactActive={false}/>
    
            <main id="main-content" class="bg-unity-yellow">
                <Hero link="/" bgImg="bg-unity-home"/>
                
                <YellowSection heading="What is the Need for this Manual?" text="This manual exists because many LGBTQI+ people face distinct barriers to meaningful employment opportunity, and therefore, workforce practitioners should be prepared with relevant knowledge to help LGBTQI+ participants succeed in the job market. The barriers LGBTQI+ people face are often a direct result of stigma, discrimination, and violence experienced in work and educational settings. With awareness, preparation, and strategic interventions targeted to LGBTQI+ peoples’ unique needs, workforce providers can deliver the resources and services needed to support LGBTQI+ people."/>
    
                <Grid/>
  
                <BlueSection heading="Full Report" text="The NYC Unity Project and the NYC Center for Youth Employment present this manual as a tool for supporting workforce development program professionals in their efforts to create more inclusive environments, and successful outcomes, for lesbian, gay, bisexual, transgender, queer, questioning, and intersex (LGBTQI+) people. While this manual is particularly relevant to workforce providers operating in New York City, there are key concepts and best practices that would be appropriate for implementation anywhere." buttonActive={true} buttonLink="#" buttonText="Download Report"/>
  
            </main>

            <Footer returnBg="bg-unity-blue"/>

        </div>
    );
}