/**
 * The Img component. A circular image that is part of the grid square.
 * 
 * Props:
 *  img - the image itself (React component)
 *  altText - the alt text for the image (String)
 */

import React from 'react';

export default function Img(props) {
  return <img className="usa-media-block__img img-circular"
    src={props.img} alt={props.altText}/>;
}
