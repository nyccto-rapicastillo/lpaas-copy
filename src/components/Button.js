import React from 'react';

export default function Button(props) {
    return <a className="usa-button usa-button--big" href={props.buttonLink}>{props.children}</a>;
}