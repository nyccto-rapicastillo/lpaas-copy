import React from 'react';

export default (props) => (
  <div>
    <a className="usa-skipnav" href="#main-content">Skip to main content</a>
    <section className="usa-banner" aria-label="Official government website">
      <div className="usa-accordion">
        <header className="usa-banner__header">
          <div className="usa-banner__inner">
            <div className="grid-col-auto">
              <img className="usa-banner__header-flag" src="/assets/img/us_flag_small.png" alt="U.S. flag" />
            </div>
            <div className="grid-col-fill tablet:grid-col-auto">
              <p className="usa-banner__header-text">An official website of the United States government</p>
              <p className="usa-banner__header-action" aria-hidden="true">Here’s how you know</p>
            </div>
            <button className="usa-accordion__button usa-banner__button"
              aria-expanded="false" aria-controls="gov-banner">
              <span className="usa-banner__button-text">Here’s how you know</span>
            </button>
          </div>
        </header>
        <div className="usa-banner__content usa-accordion__content" id="gov-banner">
          <div className="grid-row grid-gap-lg">
            <div className="usa-banner__guidance tablet:grid-col-6">
              <img className="usa-banner__icon usa-media-block__img" src="/assets/img/icon-dot-gov.svg" role="img" alt="Dot gov" />
              <div className="usa-media-block__body">
                <p>
                  <strong>The .gov means it’s official.</strong>
                  <br />
                  Federal government websites often end in .gov or .mil. Before sharing sensitive information, make sure you’re on a federal government site.
                </p>
              </div>
            </div>
            <div className="usa-banner__guidance tablet:grid-col-6">
              <img className="usa-banner__icon usa-media-block__img" src="/assets/img/icon-https.svg" role="img" alt="Https" />
              <div className="usa-media-block__body">
                <p>
                  <strong>The site is secure.</strong>
                  <br />
                  The <strong>https://</strong> ensures that you are connecting to the official website and that any information you provide is encrypted and transmitted securely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    
      
    
    <div className="usa-overlay"></div>
    <header className="usa-header usa-header--extended"><div className="usa-navbar">
      <div className="usa-logo" id="extended-logo">
        <em className="usa-logo__text"><a href="/" title="Home" aria-label="Home">Project title</a></em>
      </div>
      <button className="usa-menu-btn">Menu</button>
    </div>
    <nav aria-label="Primary navigation" className="usa-nav">
        <div className="usa-nav__inner"><button className="usa-nav__close"><img src="/assets/img/close.svg" role="img" alt="close" /></button>
    <ul className="usa-nav__primary usa-accordion"><li className="usa-nav__primary-item">
        <button className="usa-accordion__button usa-nav__link  usa-current" aria-expanded="false" aria-controls="extended-nav-section-one"><span>Current section</span></button>
        <ul id="extended-nav-section-one" className="usa-nav__submenu"><li className="usa-nav__submenu-item">
                  <a href="#" className=""> Navigation link</a>
                </li><li className="usa-nav__submenu-item">
                  <a href="#" className=""> Navigation link</a>
                </li><li className="usa-nav__submenu-item">
                  <a href="#" className=""> Navigation link</a>
                </li></ul></li><li className="usa-nav__primary-item">
        <button className="usa-accordion__button usa-nav__link" aria-expanded="false" aria-controls="extended-nav-section-two"><span>Section</span></button>
        <ul id="extended-nav-section-two" className="usa-nav__submenu"><li className="usa-nav__submenu-item">
                  <a href="#" className=""> Navigation link</a>
                </li><li className="usa-nav__submenu-item">
                  <a href="#" className=""> Navigation link</a>
                </li><li className="usa-nav__submenu-item">
                  <a href="#" className=""> Navigation link</a>
                </li></ul></li><li className="usa-nav__primary-item">
        <a className="usa-nav__link" href="javascript:void(0)"><span>Simple link</span></a>
        </li></ul><div className="usa-nav__secondary">
      <ul className="usa-nav__secondary-links"><li className="usa-nav__secondary-item">
          <a href="">Secondary link</a>
        </li><li className="usa-nav__secondary-item">
          <a href="">Another secondary link</a>
        </li></ul><form className="usa-search usa-search--small " role="search">
      <label className="usa-sr-only" for="extended-search-field-small">Search small</label>
      <input className="usa-input" id="extended-search-field-small" type="search" name="search" />
      <button className="usa-button" type="submit"><span className="usa-sr-only">Search</span></button>
    </form>
    </div>
    </div>
      </nav>
    </header>
    
    
      
    
    <main id="main-content">
      <section className="usa-hero" aria-label="Introduction">
      <div className="grid-container">
        <div className="usa-hero__callout">
          <h1 className="usa-hero__heading"><span className="usa-hero__heading--alt">Hero callout:</span>Bring attention to a project priority
          </h1><p>Support the callout with some short explanatory text. You don’t need more than a couple of sentences.</p><a className="usa-button" href="javascript:void(0)">Call to action</a>
        </div>
      </div>
    </section>
    
    
      
      <section className="grid-container usa-section">
        <div className="grid-row grid-gap">
          <div className="tablet:grid-col-4">
            <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">A tagline highlights your approach</h2>
          </div>
          <div className="tablet:grid-col-8 usa-prose">
            <p>The tagline should inspire confidence and interest, focusing on the value that your overall approach offers to your audience. Use a heading typeface and keep your tagline to just a few words, and don’t confuse or mystify.</p>
    <p>Use the right side of the grid to explain the tagline a bit more. What are your goals? How do you do your work? Write in the present tense, and stay brief here. People who are interested can find details on internal pages.</p>
    
          </div>
        </div>
      </section>
      
    
      <section className="usa-graphic-list usa-section usa-section--dark">
      <div className="grid-container">
        <div className="usa-graphic-list__row grid-row grid-gap">
          <div className="usa-media-block tablet:grid-col">
            <img className="usa-media-block__img"  src="/assets/img/circle-124.png" alt="Alt text" />
            <div className="usa-media-block__body">
              <h2 className="usa-graphic-list__heading">Graphic headings can vary.</h2>
              <p>Graphic headings can be used a few different ways, depending on what your landing page is for. Highlight your values, specific program areas, or results.</p>
            </div>
          </div>
          <div className="usa-media-block tablet:grid-col">
            <img className="usa-media-block__img"  src="/assets/img/circle-124.png" alt="Alt text" />
            <div className="usa-media-block__body">
              <h2 className="usa-graphic-list__heading">Stick to 6 or fewer words.</h2>
              <p>Keep body text to about 30 words. They can be shorter, but try to be somewhat balanced across all four. It creates a clean appearance with good spacing.</p>
            </div>
          </div>
        </div>
        <div className="usa-graphic-list__row grid-row grid-gap">
          <div className="usa-media-block tablet:grid-col">
            <img className="usa-media-block__img"  src="/assets/img/circle-124.png" alt="Alt text" />
            <div className="usa-media-block__body">
              <h2 className="usa-graphic-list__heading">Never highlight anything without a goal.</h2>
              <p>For anything you want to highlight here, understand what your users know now, and what activity or impression you want from them after they see it.</p>
            </div>
          </div>
          <div className="usa-media-block tablet:grid-col">
            <img className="usa-media-block__img"  src="/assets/img/circle-124.png" alt="Alt text" />
            <div className="usa-media-block__body">
              <h2 className="usa-graphic-list__heading">Could also have 2 or 6.</h2>
              <p>In addition to your goal, find out your users’ goals. What do they want to know or do that supports your mission? Use these headings to show those.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    
      <section id="test-section-id" className="usa-section">
        <div className="grid-container">
          <h2 className="font-heading-xl margin-y-0">Section heading</h2>
          <p className="usa-intro">Everything up to this point should help people understand your agency or project: who you are, your goal or mission, and how you approach it. Use this section to encourage them to act. Describe why they should get in touch here, and use an active verb on the button below. “Get in touch,” “Learn more,” and so on.</p>
          <a className="usa-button usa-button--big" href="#">Call to action</a>
        </div>
      </section>
    
    </main>
    
  </div>
);