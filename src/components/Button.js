/**
 * The Button component. A large button placed at various places on the site.
 * 
 * Props:
 *  link - the URL the button leads to (String)
 *  children - any text that should be contained within the button (can be any object, expected to be a String)
 */

import React from 'react';

export default function Button(props) {
  return <a className="usa-button usa-button--big" {...props}
    href={props.link} target="_blank">{props.children}</a>;
}
