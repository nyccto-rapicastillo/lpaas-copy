import React from 'react';

export default function Heading(props) {

    // font-heading-xl text-barlow-heading text-primary-darker margin-y-0
    // margin-top-0 tablet:margin-bottom-0
    return (
        <h2 className={`font-heading-xl text-barlow-heading text-primary-darker ${props.style}`}>{props.children}</h2>
    );
}