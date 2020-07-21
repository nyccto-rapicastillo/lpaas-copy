import React from 'react';

export default function YellowParagraph(props) {
    return(
        <div class="tablet:grid-col-8 usa-prose">
            <p>{props.children}</p>
        </div>
    );
}