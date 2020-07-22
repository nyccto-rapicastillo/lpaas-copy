import React from 'react';

export default function Img(props) {
    return <img class="usa-media-block__img img-circular"  src={props.img} alt={props.altText}/>;
}