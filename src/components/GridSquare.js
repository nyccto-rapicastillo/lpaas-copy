/**
 * The GridSquare component. An individual tile or square within a grid, which is composed of a circular image floating to the left, a heading, and a paragraph of text.
 * 
 * Props:
 *  img - the image (React component)
 *  altText - the alt text for the image (String)
 *  heading - the text for the heading (String)
 *  children - the text for the paragraph (can be any object, expecting a String)
 */

import React from 'react';

// Import composite images
import Img from './Img';

export default function GridSquare(props) {
  return (
    <div className="usa-media-block tablet:grid-col">

      {/* Image */}
      <Img img={props.img} alt={props.altText}/>

      <div className="usa-media-block__body">

        {/* Heading */}
        <h2 className="usa-graphic-list__heading text-barlow-title">
          {props.heading}
        </h2>

        {/* Paragraph */}
        <p>{props.children}</p>

      </div>

    </div>
  );
}
