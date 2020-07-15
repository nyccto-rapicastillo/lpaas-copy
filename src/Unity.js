import React from 'react';
import Home from './templates/Home';
import About from './templates/About';
import Contact from './templates/Contact';

import CircleImg1 from "./assets/img/GridImage1.png"
import CircleImg2 from "./assets/img/GridImage2.png"
import CircleImg3 from "./assets/img/GridImage3.png"
import CircleImg4 from "./assets/img/GridImage4.png"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default (props) => (
  <Router>
        <Switch>
          <Route path="/" exact 
            render={props => (
              <Home pageLabel="home" mainBg="bg-unity-yellow"
              heroLink="/" heroBg="bg-unity-home"
              heading1="What is the Need for this Manual?" text1="This manual exists because many LGBTQI+ people face distinct barriers to meaningful employment opportunity, and therefore, workforce practitioners should be prepared with relevant knowledge to help LGBTQI+ participants succeed in the job market. The barriers LGBTQI+ people face are often a direct result of stigma, discrimination, and violence experienced in work and educational settings. With awareness, preparation, and strategic interventions targeted to LGBTQI+ peoples’ unique needs, workforce providers can deliver the resources and services needed to support LGBTQI+ people."
              gridImg1={CircleImg1} gridAlt1="Alt Text" gridHeading1="Concepts and Vocabulary" gridText1="To serve the LGBTQI+ community well, you need to understand the different LGBTQI+ identities and
              be familiar with LGBTQI+ terminology, to ensure your program uses the most respectful language."
              gridImg2={CircleImg2} gridAlt2="Alt Text" gridHeading2="Obligations under the Law" gridText2="This chapter provides a concise guide to the legal obligations that organizations and employers have to LGBTQI+ people,
              as well as resoures that are available to LGBTQI+ people."
              gridImg3={CircleImg3} gridAlt3="Alt text" gridHeading3="Building a Safer Space" gridText3="This chapter will touch on the importance of maintaing a trauma-informed lens in work with LGBTQI+ communities, information for supporting many transgender, gender nonconforming, and non-binary (TGNCNB) program participants, and basic tips on establishing an LGBTQI+-friendly ecosystem in your workforce program."
              gridImg4={CircleImg4} gridAlt4="Alt text" gridHeading4="Making Sure a Place is Safe" gridText4="This chapter will explain how to get information from employers and other referral sites, which includes asking pointed
              questions about an employer's experiences with LGBTQI+ people and cultural competency training."
              heading2="Full Report" text2="The NYC Unity Project and the NYC Center for Youth Employment present this manual as a tool for supporting workforce development program professionals in their efforts to create more inclusive environments, and successful outcomes, for lesbian, gay, bisexual, transgender, queer, questioning, and intersex (LGBTQI+) people. While this manual is particularly relevant to workforce providers operating in New York City, there are key concepts and best practices that would be appropriate for implementation anywhere."
              buttonPresent={true} buttonLink="#" buttonText="Download Report"
              footerBg="bg-unity-blue"/>
            )}
          />

          <Route path="/about" exact
            render={props => (
              <About pageLabel="about" mainBg="bg-unity-yellow" heroLink="/" heroBg="bg-unity-about"
              heading1="ABOUT the NYC UNITY project" text1="Founded in September 2017 by First Lady Chirlane McCray, the NYC Unity Project is the City’s first-ever, multi-agency project focused on developing innovative policy and program interventions to support and empower LGBTQI+ communities. With multi-year commitments already totaling over $10 million to ensure LGBTQI+ communities are safe, supported, and healthy, the NYC Unity Project takes an intersectional and multifaceted approach that focuses on tackling the root causes of systemic inequities while also building programs and services to address urgent community needs right now. Currently the NYC Unity Project supports LGBTQI+ communities with programs and services focused on: building workforce opportunities and job access, building permanent housing and homelessness prevention services, facilitating family acceptance to prevent youth homelessness, and promoting health equity across systems, among other programs."
              heading2="ABOUT the center for youth employment" text2="The NYC Center for Youth Employment (CYE) serves to expand, improve, and align publicly funded programs that help young New Yorkers build skills, gain experience, explore potential career paths, and prepare for success in the world of work. In partnership with stakeholders in City government, the private sector, philanthropy, and the provider community, CYE provides subject matter expertise and capacity and resource support within New York City’s youth workforce ecosystem. CYE coordinates classroom education, career exploration, work readiness, and personal development to provide young New Yorkers with the tools they need to build the lives they want."
              heading3="acknowledgements" text3="The final version of this report was authored by Andrea Bowen, with great gratitude and use of material from an initial draft by Lillian Rivera and Bryson Rose at the Hetrick-Martin Institute. Thanks to the Workforce Professionals Training Institute for its support of Bowen's trainings on LGBTQI+ affirming practices in youth workforce services. WPTI's support of that work, and those trainings, strongly shaped the content of this manual. Special thanks to the NYC Unity Project, Young Men’s Initiative, the Center for Youth Employment, The Mayor’s Fund to Advance New York City, H. Van Ameringen Foundation, and Penchant Capital LLC for providing funding for this project."
              footerBg="bg-unity-yellow"/>
              )}
          />

        <Route path="/contact" exact
            render={props => (
              <Contact pageLabel="contact" mainBg="bg-unity-yellow"
              heroLink="/" heroBg="bg-unity-contact"
              heading1="Contact us"
              text1={["To learn more about this project and the partners, please find our information below. We welcome your thoughts and feedback.", 
              <div><p><strong>NYC Unity Project</strong><br/><a href="https://nyc.gov/unityproject">nyc.gov/unityproject</a>
              <br/>Twitter: <a href="https://twitter.com/NYCUnityProject">@NYCUnityProject</a>
              </p><b>NYC Center for Youth Employment</b>
              <br/><a href="https://nyc.gov/cye">nyc.gov/cye</a>
              <br/>Twitter: <a href="https://twitter.com/NYCCYE">@NYCCYE</a></div>]}
              buttonPresent={false}
              footerBg="bg-unity-blue"/>
            )}
          />
        </Switch>
      </Router>
);