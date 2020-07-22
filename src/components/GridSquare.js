import React from 'react';
import Img from './Img';

export default function GridSquare(props) {
    return(
        <div class="usa-media-block tablet:grid-col">
            <Img img={props.img} alt={props.altText}/>

            <div class="usa-media-block__body">
                <h2 class="usa-graphic-list__heading text-barlow-title">{props.heading}</h2>
                <p>{props.children}</p>
            </div>

        </div>
    );
}