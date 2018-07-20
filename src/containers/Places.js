import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getPlacesElements, setError } from '../actions/places';

class PlacesElementsListing extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    placesElements: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      error: PropTypes.string,
      placesElements: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({}),
    }),
    getPlacesElements: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired,
  }

  static defaultProps = {
    match: null,
  }

  componentDidMount = () => this.fetchPlacesElements();

  /**
    * Fetch Data from API, saving to Redux
    */
  fetchPlacesElements = () => {
    return this.props.getPlacesElements()
      .catch((err) => {
        console.log(`Error: ${err}`);
        return this.props.setError(err);
      });
  }

  render = () => {
    const { Layout, placesElements, match } = this.props;
    const id = (match && match.params && match.params.id) ? match.params.id : null;

    return (
      <Layout
        placesElementsId={id}
        error={placesElements.error}
        loading={placesElements.loading}
        placesElements={placesElements.placesElements}
        reFetch={() => this.fetchPlacesElements()}
      />
    );
  }
}

const mapStateToProps = state => ({
  placesElements: state.placesElements || {},
});

const mapDispatchToProps = {
  getPlacesElements,
  setError,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlacesElementsListing);
