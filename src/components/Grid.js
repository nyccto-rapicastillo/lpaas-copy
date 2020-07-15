import React from 'react';
import GridSquare from './GridSquare';

export default function Grid(props) {
    return(
        <section class="usa-graphic-list usa-section usa-section--dark">
            <div class="grid-container">
                <div class="usa-graphic-list__row grid-row grid-gap">
                    <GridSquare img={props.img1} altText={props.alt1} heading={props.heading1} text={props.text1}/>
                    
                    <GridSquare img={props.img2} altText={props.alt2} heading={props.heading2} text={props.text2}/>
                </div>

                <div class="usa-graphic-list__row grid-row grid-gap">
                    <GridSquare img={props.img3} altText={props.alt3} heading={props.heading3} text={props.text3}/>
                    
                    <GridSquare img={props.img4} altText={props.alt4} heading={props.heading4} text={props.text4}/>
                </div>
            </div>
        </section>    
    );
}