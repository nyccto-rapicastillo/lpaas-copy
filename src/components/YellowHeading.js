import React from 'react';

export default function YellowHeading(props) {
    return (
        <div class="tablet:grid-col-4">
            <h2 class="font-heading-xl margin-top-0 tablet:margin-bottom-0 text-barlow-heading text-primary-darker">{props.children}</h2>
        </div>
    );
}