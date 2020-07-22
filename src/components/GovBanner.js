import React from 'react';
import NYCLogo from '../assets/img/nyc.png';

import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../i18n/config';

export default function GovBanner() {
    const { i18n, t } = useTranslation();

    return(
    <div>
        <a class="usa-skipnav" href="#main-content">Skip to main content</a>
        <section class="usa-banner bg-primary-darker" aria-label="Official government website">
            <div class="usa-accordion">
                <header class="usa-banner__header">
                    <div class="usa-banner__inner">
                        <div class="grid-col-fill tablet:grid-col-auto">
                            <p class="usa-banner__header-text text-white"><img src={NYCLogo}/> {t('topNav')}</p>
                        </div>
                    </div>
                </header>
            </div>
        </section>
    </div>     
    );
}