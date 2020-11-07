import React, {useState} from 'react';
import {
  Card,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Row
} from 'react-bootstrap';

const ChooseCurrency = ({prices}) => {
  const [currency, setCurrency] = useState('USD');
  console.log('prices: ', prices);

  const handleSelect = (evtKey) => {
    console.log('ekey: ', evtKey);
    setCurrency(evtKey);
  };

  return (
    <Container>
      <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
          Select Currency
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {console.log('ekey: ', Object.keys(prices))}
          {Object.keys(prices).map((priceType, i) => (
              <Dropdown.Item
                eventKey={priceType}
                onSelect={handleSelect}>
                {prices[i].code}
                {console.log("PT", priceType)}
              </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <Col>
          <Card>
            <Card.Body>
              <Card.Title>{currency}</Card.Title>
              <Card.Text>
                {Object.entries(prices).map((priceData) =>)}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Container>
  );
}

export default ChooseCurrency;
