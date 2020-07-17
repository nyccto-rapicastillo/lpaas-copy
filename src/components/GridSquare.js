import React from 'react';

export default function GridSquare(props) {
    return(
        <div class="usa-media-block tablet:grid-col">
            <img class="usa-media-block__img img-circular"  src={props.img} alt={props.altText}/>
            <div class="usa-media-block__body">
                <h2 class="usa-graphic-list__heading font-barlow-title">{props.heading}</h2>
                <p>{props.text}</p>
            </div>
        </div>
    );
}