# The NYC Unity Project Guide for LGBTQIA+ Workplace Inclusivity

This repository contains the source code for the landing page for the NYC Unity Project Guide for LGBTQIA+ Workplace Inclusivity. You can find further details about the tech stack in the following sections. You can learn more about the Unity Project on [their website](https://growingupnyc.cityofnewyork.us/generationnyc/topics/lgbtq/). The website was created with the support of [the NYC Mayor's Office of the Chief Technology Officer](http://nyc.gov/cto).

## Tech Stack

The website was built using React, HTML, and SCSS, bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The site is built on top of [the United States Web Design System (USWDS)](https://designsystem.digital.gov/). Specifically, the design of the site is a variation of [the standard USWDS landing page](https://designsystem.digital.gov/page-templates/landing/), with style changes implemented to better reflect the values of the Unity Project. On the development side, we used Gulp to automate the development process and compile our Sass files.

The Unity Project landing page is built using React components that are modified versions of USWDS elements. To experiment with the components in isolation, use the Storybook in the `storybook` branch of this repository.

## Running Locally

To load the site locally, run **`yarn start`** to run the web app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

To experiment with style changes, particularly if you intend to edit the `styles.scss` file, run **`gulp`** while running `yarn start`.

## Thanks

The Mayor's Office of the CTO would like to thank [Shreya Chowdhary](https://github.com/18chowdhary) for their significant contributions to this project as a summer Fellow in 2020.

## Contact

If you have questions about the code, or the project at large, email digital@cto.nyc.gov.
