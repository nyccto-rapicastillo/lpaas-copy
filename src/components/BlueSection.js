import React from 'react';
import Button from './Button';

export default function BlueSection(props) {
    return(
        <div>
            <section id="test-section-id" class="usa-section bg-unity-blue">
                <div class="grid-container">
                    <h2 class="font-heading-xl margin-y-0">{props.heading}</h2>
                    <p class="usa-intro">{props.text}</p>
                    <Button buttonActive={props.buttonActive} buttonText={props.buttonText} buttonLink={props.buttonLink}/>
                </div>
            </section>
        </div>     
    );
}