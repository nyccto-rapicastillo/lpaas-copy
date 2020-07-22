import React from 'react';
import GovBanner from '../components/GovBanner';
import Header from '../components/Header';
import Hero from '../components/Hero';
import YellowSection from '../components/YellowSection';
import Footer from '../components/Footer';
import Paragraph from '../components/Paragraph';
import Heading from '../components/Heading';

import AboutImg from "../assets/img/_A3A3659_CMYK\ 1.png";

export default function About(props) {
    const YELLOW_SECTIONS = [
        {heading: "ABOUT the NYC UNITY project", text: "Founded in September 2017 by First Lady Chirlane McCray, the NYC Unity Project is the City’s first-ever, multi-agency project focused on developing innovative policy and program interventions to support and empower LGBTQI+ communities. With multi-year commitments already totaling over $10 million to ensure LGBTQI+ communities are safe, supported, and healthy, the NYC Unity Project takes an intersectional and multifaceted approach that focuses on tackling the root causes of systemic inequities while also building programs and services to address urgent community needs right now. Currently the NYC Unity Project supports LGBTQI+ communities with programs and services focused on: building workforce opportunities and job access, building permanent housing and homelessness prevention services, facilitating family acceptance to prevent youth homelessness, and promoting health equity across systems, among other programs."},
        {heading: "ABOUT the center for youth employment", text: "The NYC Center for Youth Employment (CYE) serves to expand, improve, and align publicly funded programs that help young New Yorkers build skills, gain experience, explore potential career paths, and prepare for success in the world of work. In partnership with stakeholders in City government, the private sector, philanthropy, and the provider community, CYE provides subject matter expertise and capacity and resource support within New York City’s youth workforce ecosystem. CYE coordinates classroom education, career exploration, work readiness, and personal development to provide young New Yorkers with the tools they need to build the lives they want."},
        {heading: "acknowledgements", text: "The final version of this report was authored by Andrea Bowen, with great gratitude and use of material from an initial draft by Lillian Rivera and Bryson Rose at the Hetrick-Martin Institute. Thanks to the Workforce Professionals Training Institute for its support of Bowen's trainings on LGBTQI+ affirming practices in youth workforce services. WPTI's support of that work, and those trainings, strongly shaped the content of this manual. Special thanks to the NYC Unity Project, Young Men’s Initiative, the Center for Youth Employment, The Mayor’s Fund to Advance New York City, H. Van Ameringen Foundation, and Penchant Capital LLC for providing funding for this project."}
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

            <Header currentPage="About"/>
    
            <main id="main-content" className="bg-unity-yellow">
                <Hero bgImg={AboutImg}/>
                
                {yellowSections}
  
            </main>

            <Footer returnBg="bg-unity-yellow"/>

        </div>
    );
}