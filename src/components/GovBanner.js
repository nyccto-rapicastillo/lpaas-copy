import React from 'react';
import NYCLogo from '../assets/img/nyc.png';

export default function GovBanner() {
    return(
    <div>
        <a class="usa-skipnav" href="#main-content">Skip to main content</a>
        <section class="usa-banner bg-primary-darker" aria-label="Official government website">
            <div class="usa-accordion">
                <header class="usa-banner__header">
                    <div class="usa-banner__inner">
                        <div class="grid-col-fill tablet:grid-col-auto">
                            <p class="usa-banner__header-text text-white"><img src={NYCLogo}/> An official website of New York City government</p>
                        </div>
                    </div>
                </header>
            </div>
        </section>
    </div>     
    );
}