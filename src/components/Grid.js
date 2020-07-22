import React from 'react';

export default function Grid(props) {
    return(
        <section class="usa-graphic-list usa-section usa-section--dark">
            <div class="grid-container">

                {props.children}
                
            </div>
        </section>    
    );
}