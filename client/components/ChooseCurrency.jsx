import React, {useState} from 'react';
import {
  Card,
  Col,
  Container,
  Row, Accordion, Button
} from 'react-bootstrap';

const ChooseCurrency = ({prices, current}) => {
  // const [currency, setCurrency] = useState('USD');
  console.log('prices: ', Object.entries(prices));

  const mappedListHead = Object.keys(prices).map((priceType, i) => (
    <Accordion.Toggle
      as={Button}
      eventKey={priceType}
      >
      {prices[i].code}
    </Accordion.Toggle>
  ));

  return (
    <Container>
      <Row>
        <Col>
          <Accordion>
            <Card>
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
        </Col>

        <Col>
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
        </Col>

        <Col>
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
        </Col>

      </Row>
    </Container>
  );
}

export default ChooseCurrency;
