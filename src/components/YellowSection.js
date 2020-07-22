import React from 'react';

export default function YellowSection(props) {
    return(
            <section id="test-section-id" class="grid-container usa-section">
                <div className="grid-row grid-gap">

                    {props.children}

                </div>
            </section>   
    );
}