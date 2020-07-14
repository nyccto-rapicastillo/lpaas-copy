import React from 'react';

export default function Button(props) {
    if (props.buttonActive)
    {
        return <a class="usa-button usa-button--big" href={props.buttonLink}>{props.buttonText}</a>;
    }
    else {
        return null;
    }
    
}