import React from 'react';

export default function AgencyGrid(props) {
    let styleMods = props.bg + " " + props.text;
    let footerClassName = "usa-footer__secondary-section " + styleMods;
    let gridClassName = "grid-cotainer " + styleMods;

    return(
    <div class="grid-row grid-gap bg-unity-purple">
        <div class={footerClassName}>
        <div class={gridClassName}>
            <div class="grid-row grid-gap">
                <div class="agency-grid footer-text">
                    <a href={props.logo1link}><img class="agency-item agency-adjustment-first" src={props.logo1} alt=""/></a>

                    <div class="agency-item">
                        <p>{props.logo2text}</p>
                        <a href={props.logo2link}><img src={props.logo2} alt=""/></a>
                    </div>
                                
                    <a href={props.logo3link}><img class="agency-item agency-adjustment" src={props.logo3} alt=""/></a>

                    <div class="agency-item">
                        <p>{props.logo4text}</p>
                        <a href={props.logo4link}><img src={props.logo4} alt=""/></a>
                    </div> 
                </div>

                <p/>
                    
                <p class="footer-text">{props.trademarkText}</p>
            </div>
        </div>    
    </div>

    </div>
    );
}

