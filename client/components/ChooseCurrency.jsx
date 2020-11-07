import React, {useState} from 'react';
import {
  Card,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Row
} from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const ChooseCurrency = ({prices}) => {
  const [currency, setCurrency] = useState('USD');
  const [selected, setSelected] = useState(false);

  const handleSelect = (evtKey) => {
    setCurrency(evtKey);
    setSelected(true);
  };

  return (
    <Container>
      <Dropdown className="currency-dropdown">
        <Dropdown.Toggle variant="dark">
          Select Currency
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {/* {console.log('obj.key prices: ', Object.keys(prices))} */}
          {Object.keys(prices).map((priceType, i) => (
              <Dropdown.Item
                eventKey={priceType}
                onSelect={handleSelect}>
                {prices[i].code}
                {/* {console.log("PT", priceType)} */}
              </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <Col>
      {selected &&
          <Card className="selected-currency">
            <Card.Body>
             <Card.Title>
             {Object.entries(prices).map((currencyData) =>
                  currencyData[0] === currency &&
                  currencyData[1].code
                )}
             </Card.Title>
              <Card.Text>
                {Object.entries(prices).map((currencyData) =>
                  currencyData[0] === currency &&
                  currencyData[1].rate
                )}
              </Card.Text>
            </Card.Body>
          </Card>}
        </Col>
    </Container>
  );
}

export default ChooseCurrency;
