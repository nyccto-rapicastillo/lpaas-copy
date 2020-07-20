import React from 'react';
import Button from './Button';

export default function BlueSection(props) {
    return(
        <section id="test-section-id" class="usa-section bg-unity-blue">
            <div class="grid-container">
                <h2 class="font-heading-xl margin-y-0 text-barlow-heading text-primary-darker">{props.heading}</h2>
                <p class="usa-intro usa-prose">{props.text}</p>
                <Button buttonActive={props.buttonActive} buttonText={props.buttonText} buttonLink={props.buttonLink}/>
            </div>
        </section>     
    );
}