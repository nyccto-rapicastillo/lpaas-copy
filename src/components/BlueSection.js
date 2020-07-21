import React from 'react';

export default function BlueSection(props) {
    return(
        <section id="test-section-id" class="usa-section bg-unity-blue">
            <div class="grid-container">
                {props.children}
            </div>
        </section>     
    );
}