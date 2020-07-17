import React from 'react';

export default function YellowSection(props) {
    return(
        <div>
            <section class="grid-container usa-section">
                <div class="grid-row grid-gap">

                    <div class="tablet:grid-col-4">
                        <h2 class="font-heading-xl margin-top-0 tablet:margin-bottom-0 font-barlow-heading text-primary-darker">{props.heading}</h2>
                    </div>

                    <div class="tablet:grid-col-8 usa-prose">
                        <p>{props.text}</p>
                    </div>
                    
                </div>
            </section>
        </div>     
    );
}