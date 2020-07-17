import React from 'react';
import Button from './Button';

export default function Hero(props) {
    let imgClassName = "usa-hero "+props.bgImg
    return(
        <div>
            <section class={imgClassName} aria-label="Introduction">
                <div class="grid-container">
                    <div class="usa-hero__callout">
                        <h1 class="usa-hero__heading">
                            <span class="usa-hero__heading--alt font-barlow-logo text-unity-blue">Work It, NYC
                            <br/><span class="text-accent-cool">A Guide to LGBTQI+ Workplace Inclusivity</span> 
                            </span>
                        </h1>
                        <Button buttonActive={true} buttonLink={props.link} buttonText="Download Report"/>
                    </div>
                </div>
            </section>
        </div>     
    );
}