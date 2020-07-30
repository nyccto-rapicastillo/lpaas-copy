import React from 'react';

export default function Button(props) {
  return <a className="usa-button usa-button--big" {...props}
    href={props.link}>{props.children}</a>;
}
