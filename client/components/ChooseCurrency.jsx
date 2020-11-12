import React, {useState} from 'react';
import {
  Card,
  Col,
  Container,
  Row, Accordion, Button
} from 'react-bootstrap';

const ChooseCurrency = ({prices, current}) => {
  // console.log('prices: ', Object.entries(prices));


  const mappedListHead = Object.keys(prices).map((priceType, i) => (
    <Accordion.Toggle
      as={Button} variant="dark"
      eventKey={priceType}
      >
      {prices[i].code}
    </Accordion.Toggle>
  ));

  return (
    <Container className="accord-container">
      <Row className="accord-row">
          <Accordion>
            <Card className="card">
              <Card.Header>
              {mappedListHead[0]}
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                <Card.Title>
                {current[0]}
                </Card.Title>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          <Accordion>
            <Card>
              <Card.Header>
              {mappedListHead[1]}
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                <Card.Title>
                {current[1]}
                </Card.Title>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          <Accordion>
            <Card>
              <Card.Header>
              {mappedListHead[2]}
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                <Card.Title>
                {current[2]}
                </Card.Title>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
      </Row>
    </Container>
  );
}

export default ChooseCurrency;
