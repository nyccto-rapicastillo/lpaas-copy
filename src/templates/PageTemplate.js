import React from 'react';

import GovBanner from '../components/GovBanner';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

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