import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const FeatureCard = ({ feature }) => {
  return (
    <Col key={feature.id}>
      <Card>
        <Card.Header>
          <Card.Title>
            {feature.icon}{" "}
            <span style={{ marginLeft: "20px" }}>{feature.name}</span>
          </Card.Title>
        </Card.Header>
        <Card.Body>
          {feature.image ? (
            <Row>
              <Col xs={4}>
                <Card.Img variant="top" src={feature.image} />
              </Col>
              <Col xs={8}>
                <Card.Text>{feature.description}</Card.Text>
              </Col>
            </Row>
          ) : (
            <Card.Text>{feature.description}</Card.Text>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default FeatureCard;