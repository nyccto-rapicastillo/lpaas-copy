import React from 'react';

export default function YellowSection(props) {
    return(
        <div>
            <section class="grid-container usa-section">
                <div class="grid-row grid-gap">

                    {props.children}

                </div>
            </section>
        </div>     
    );
}