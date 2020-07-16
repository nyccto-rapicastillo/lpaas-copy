import React from 'react';

export default function AgencyGrid(props) {
    let styleMods = props.bg + " " + props.text;
    let footerClassName = "usa-footer__secondary-section" + styleMods;
    let gridClassName = "grid-cotainer footer-padding " + styleMods;

    return(
    <div class={footerClassName}>
        <div class={gridClassName}>
            <div class="grid-row grid-gap">
                <div class="agency-grid footer-text">
                        <img class="agency-item agency-adjustment-first" src={props.logo1} alt=""/>

                        <div class="agency-item">
                            <p>{props.logo2text}</p>
                            <img src={props.logo2} alt=""/>
                        </div>
                                
                        <img class="agency-item agency-adjustment" src={props.logo3} alt=""/>

                        <div class="agency-item">
                            <p>{props.logo4text}</p>
                            <img src={props.logo4} alt=""/>
                        </div> 
                    </div>

                    <p/>
                        
                    <p class="footer-text">{props.trademarkText}</p>

                </div>
                
            </div>
    </div>
    );
}