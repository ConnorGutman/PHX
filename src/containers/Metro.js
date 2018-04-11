import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getMetroElements, setError } from '../actions/metro';

class MetroElementsListing extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    metroElements: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      error: PropTypes.string,
      metroElements: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({}),
    }),
    getMetroElements: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired,
  }

  static defaultProps = {
    match: null,
  }

  componentDidMount = () => this.fetchMetroElements();

  /**
    * Fetch Data from API, saving to Redux
    */
  fetchMetroElements = () => {
    return this.props.getMetroElements()
      .catch((err) => {
        console.log(`Error: ${err}`);
        return this.props.setError(err);
      });
  }

  render = () => {
    const { Layout, metroElements, match } = this.props;
    const id = (match && match.params && match.params.id) ? match.params.id : null;

    return (
      <Layout
        metroElementsId={id}
        error={metroElements.error}
        loading={metroElements.loading}
        metroElements={metroElements.metroElements}
        reFetch={() => this.fetchMetroElements()}
      />
    );
  }
}

const mapStateToProps = state => ({
  metroElements: state.metroElements || {},
});

const mapDispatchToProps = {
  getMetroElements,
  setError,
};

export default connect(mapStateToProps, mapDispatchToProps)(MetroElementsListing);
