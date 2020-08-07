/**
 * The generic Page Template, which abstracts the consistent elements across each page.
 * 
 * Props:
 *  page - the label for the page (String)
 *  mainBg - the background styling for the page (String)
 *  hero - the image for the Hero callout (React component)
 *  returnBg - the background styling for the return to top section
 *  children - any other elements that need to go inside the main body
 */
import React from 'react';

// Import related components
import { GovBanner, Header, Hero, Footer } from '../components';

export default function PageTemplate(props) {
    return (
        <div>
            <GovBanner/>

            <Header currentPage={props.page}/>

            <main id="main-content" className={props.mainBg}>
                <Hero bgImg={props.hero}/>

                {props.children}
            </main>

            <Footer returnBg={props.returnBg}/>
        </div>
    )
}