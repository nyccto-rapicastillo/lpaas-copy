import React from 'react';

export default function GridSquare(props) {
    return(
        <div class="usa-media-block tablet:grid-col">
            <img class="usa-media-block__img"  src={props.img} alt={props.altText}/>
            <div class="usa-media-block__body">
                <h2 class="usa-graphic-list__heading font-barlow-heading">{props.heading}</h2>
                <p>{props.text}</p>
            </div>
        </div>
    );
}