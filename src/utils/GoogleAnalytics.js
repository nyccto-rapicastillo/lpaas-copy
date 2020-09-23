import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { Route } from 'react-router-dom';

class GoogleAnalytics extends Component {
    componentDidMount () {
        this.logPageChange(
            this.props.location.pathname,
            this.props.location.search
        );
    }

    componentDidUpdate ({ location: prevLocation }) {
        const { location: { pathname, search } } = this.props;
        const isDifferentPathname = pathname !== prevLocation.pathname;
        const isDifferentSearch = search !== prevLocation.search;

        if (isDifferentPathname || isDifferentSearch) {
            this.logPageChange(pathname, search);
        }
    }

    logPageChange (pathname, search = '') {
        const page = pathname + search;
        const { location } = window;
        ReactGA.set({
            page,
            location: `${location.origin}${page}`,
            ...this.props.options
        });
        ReactGA.pageview(page);
    }

    logEvent (cat, act) {
        ReactGA.event({
            category: cat,
            action: act
        });
    }

    render () {
        return null;
    }
}

GoogleAnalytics.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
        search: PropTypes.string
    }).isRequired,
    options: PropTypes.object
};

const RouteTracker = () => <Route component={GoogleAnalytics} />;

const init = (options = {}) => {
    // const isGAEnabled = process.env.NODE_ENV === 'production';
    const isGAEnabled = true;
    if (isGAEnabled) {
        ReactGA.initialize("UA-173389683-1");
    }

    return isGAEnabled;
};

/**
 * Event - Add custom tracking event.
 * @param {string} category 
 * @param {string} action 
 * @param {string} label 
 */
const Event = (category, action, label) => {
    ReactGA.event({
      category: category,
      action: action,
      label: label
    });
  };


const logEvent = (cat, act) => {
    ReactGA.event({
        category: cat,
        action: act
    });
};

export default {
    GoogleAnalytics,
    Event,
    RouteTracker,
    init
};


export { 
    logEvent
};
