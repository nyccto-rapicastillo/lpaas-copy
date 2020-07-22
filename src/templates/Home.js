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

import HomeImg from "../assets/img/_A3A3537_CMYK\ 1.png";
import CircleImg1 from "../assets/img/GridImage1.png";
import CircleImg2 from "../assets/img/GridImage2.png";
import CircleImg3 from "../assets/img/GridImage3.png";
import CircleImg4 from "../assets/img/GridImage4.png";

import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../i18n/config';

export default function Home(props) {

    const { i18n, t } = useTranslation();

    return(
        <div>
            <GovBanner/>

            <Header currentPage="Home"/>
    
            <main id="main-content" className="bg-unity-yellow">
                <Hero bgImg={HomeImg}/>
                
                <YellowSection>
                    <div className="tablet:grid-col-4">
                        <Heading style="margin-top-0 tablet:margin-bottom-0">
                        What is the Need for this Manual?
                        </Heading>
                    </div>

                    <Paragraph style="tablet:grid-col-8">
                        {t('back')}
                        This manual exists because many LGBTQI+ people face distinct barriers to meaningful employment opportunity, and therefore, workforce practitioners should be prepared with relevant knowledge to help LGBTQI+ participants succeed in the job market. The barriers LGBTQI+ people face are often a direct result of stigma, discrimination, and violence experienced in work and educational settings. With awareness, preparation, and strategic interventions targeted to LGBTQI+ peoples’ unique needs, workforce providers can deliver the resources and services needed to support LGBTQI+ people."
                    </Paragraph>

                </YellowSection>
    
                <Grid 
                img1={CircleImg1} alt1="Alt Text" heading1="Concepts and Vocabulary" text1="To serve the LGBTQI+ community well, you need to understand the different LGBTQI+ identities and
                be familiar with LGBTQI+ terminology, to ensure your program uses the most respectful language."
                img2={CircleImg2} alt2="Alt Text" heading2="Obligations under the Law" text2="This chapter provides a concise guide to the legal obligations that organizations and employers have to LGBTQI+ people,
                as well as resoures that are available to LGBTQI+ people."
                img3={CircleImg3} alt3="Alt Text" heading3="Building a Safer Space" text3="This chapter will touch on the importance of maintaing a trauma-informed lens in work with LGBTQI+ communities, information for supporting many transgender, gender nonconforming, and non-binary (TGNCNB) program participants, and basic tips on establishing an LGBTQI+-friendly ecosystem in your workforce program."
                img4={CircleImg4} alt4="Alt Text" heading4="Making Sure a Place is Safe" text4="This chapter will explain how to get information from employers and other referral sites, which includes asking pointed
                questions about an employer's experiences with LGBTQI+ people and cultural competency training."
                />

                <BlueSection>
                    <Heading style="margin-y-0">
                        Full Report
                    </Heading>

                    <Paragraph style="usa-intro">
                    The NYC Unity Project and the NYC Center for Youth Employment present this manual as a tool for supporting workforce development program professionals in their efforts to create more inclusive environments, and successful outcomes, for lesbian, gay, bisexual, transgender, queer, questioning, and intersex (LGBTQI+) people. While this manual is particularly relevant to workforce providers operating in New York City, there are key concepts and best practices that would be appropriate for implementation anywhere.
                    </Paragraph>

                    <Button buttonLink="#">Download Report</Button>

                </BlueSection>
  
            </main>

            <Footer returnBg="bg-unity-blue"/>

        </div>
    );
}