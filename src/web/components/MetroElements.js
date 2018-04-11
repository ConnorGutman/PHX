import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Error from './Error';

const MetroElementsListing = ({ error, loading, metroElements }) => {
  // Error
  if (error) return <Error content={error} />;

  // Build Cards for Listing
  const cards = metroElements.map(item => (
    <Card key={`${item.id}`}>
      <Link to={`/metro/${item.id}`}>
        <CardText>Link</CardText>
      </Link>
      <CardBody>
        <CardTitle>Route: {item.route}</CardTitle>
        <CardText>Position: {item.latitude},{item.longitude}</CardText>
        <Link className="btn btn-primary" to={`/metro/${item.id}`}>View Train / Bus <i className="icon-arrow-right" /></Link>
      </CardBody>
    </Card>
  ));

  // Show Listing
  return (
    <div>
      <Row>
        <Col sm="12">
          <h1>Metro Elements</h1>
          <p>The following data is read directly from Firebase.</p>
        </Col>
      </Row>
      <Row className={loading ? 'content-loading' : ''}>
        <Col sm="12" className="card-columns">
          {cards}
        </Col>
      </Row>
    </div>
  );
};

MetroElementsListing.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  metroElements: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

MetroElementsListing.defaultProps = {
  error: null,
};

export default MetroElementsListing;
