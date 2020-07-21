import React from 'react';
import Button from './Button';
import HomeImg from "../assets/img/_A3A3537_CMYK\ 1.png";

export default function Hero(props) {
    return(
        <section class="usa-hero" aria-label="Introduction" style={{ backgroundImage: `url(${HomeImg})` }}>
            <div class="grid-container">
                <div class="usa-hero__callout">
                    <h1 class="usa-hero__heading">
                        <span class="usa-hero__heading--alt text-barlow-logo text-unity-blue">Work It, NYC
                        <br/><span class="text-accent-cool">A Guide to LGBTQI+ Workplace Inclusivity</span> 
                        </span>
                    </h1>
                    <Button buttonActive={true} buttonLink={props.link}>Download Report</Button>
                </div>
            </div>
        </section>  
    );
}