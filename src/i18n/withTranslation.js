import React, { Component } from 'react';
// import i18next from './config';
import { withTranslation as withTranslationINext } from 'react-i18next';

export function withTranslation(WrappedComponent) {
    WrappedComponent = withTranslationINext()(WrappedComponent);

    return class extends Component {
      render() {
        return (
            <WrappedComponent {...this.props} />
        );
      }
    }
}