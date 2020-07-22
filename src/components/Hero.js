import React from 'react';
import Button from './Button';
import HomeImg from "../assets/img/_A3A3537_CMYK\ 1.png";

export default function Hero(props) {
    console.log(HomeImg);

    return(
        <div className="usa-hero" aria-label="Introduction" style={{ backgroundImage: `url('${props.bgImg}')`}}>
            <div className="grid-container">
                <div className="usa-hero__callout">
                    <h1 className="usa-hero__heading">
                        <span className="usa-hero__heading--alt text-barlow-logo text-unity-blue">Work It, NYC
                        <br/><span className="text-accent-cool">A Guide to LGBTQI+ Workplace Inclusivity</span> 
                        </span>
                    </h1>
                    <Button buttonActive={true} buttonLink={props.link}>Download Report</Button>
                </div>
            </div>
        </div>  
    );
}