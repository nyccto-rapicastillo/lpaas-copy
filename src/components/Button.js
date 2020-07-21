import React from 'react';

export default function Button(props) {
    return <a class="usa-button usa-button--big" href={props.buttonLink}>{props.children}</a>;
}