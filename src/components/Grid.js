import React from 'react';
import GridSquare from './GridSquare';
import CircleImg1 from "../assets/img/GettyImages-618025276_CMYK 1.png"


export default function Grid() {
    return(
        <section class="usa-graphic-list usa-section usa-section--dark">
            <div class="grid-container">
                <div class="usa-graphic-list__row grid-row grid-gap">
                    <GridSquare img={CircleImg1} altText="Alt Text" heading="Concepts and Vocabulary" text="To serve the LGBTQI+ community well, you need to understand the different LGBTQI+ identities and
                                be familiar with LGBTQI+ terminology, to ensure your program uses the most respectful language."/>
                    
                    <GridSquare img="../assets/img/circle-124.png" altText="Alt text" heading="Obligations under the Law" text="This chapter provides a concise guide to the legal obligations that organizations and employers have to LGBTQI+ people,
                                as well as resoures that are available to LGBTQI+ people."/>
                </div>

                <div class="usa-graphic-list__row grid-row grid-gap">
                    <GridSquare img="../assets/img/circle-124.png" altText="Alt text" heading="Building a Safer Space" text="This chapter will touch on the importance of maintaing a trauma-informed lens in work with LGBTQI+ communities,
                                information for supporting many transgender, gender nonconforming, and non-binary (TGNCNB) program participants, and basic
                                tips on establishing an LGBTQI+-friendly ecosystem in your workforce program."/>
                    
                    <GridSquare img="../assets/img/circle-124.png" altText="Alt text" heading="Making Sure a Place is Safe" text="This chapter will explain how to get information from employers and other referral sites, which includes asking pointed
                                questions about an employer's experiences with LGBTQI+ people and cultural competency training."/>
                </div>
            </div>
        </section>    
    );
}