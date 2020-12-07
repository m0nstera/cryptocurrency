import React from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {Container, Col, Row} from 'react-bootstrap';
import Chart from '../components/Chart.jsx';
import ChooseCurrency from '../components/ChooseCurrency.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [],
        datasets: [
          {
            label: 'Bitcoin Price',
            data: [],
            fill: true,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
          }
        ]
      },
      prices: [],
      current: []
    };
  }

  componentDidMount() {
    this.getData();
  };

  getData() {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then((res) => {
        // console.log('usd', res.data.bpi.USD.rate);
        console.log("CURRENT: ", Object.values(res.data.bpi).map((currency) => Number(currency.rate)))
        this.setState({
          prices: Object.values(res.data.bpi),
          current: Object.values(res.data.bpi).map((currency) => currency.rate)
        })
      })
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then((res) => {
        this.setState({
          data: {
            labels: Object.keys(res.data.bpi),
            datasets: [
              {
                label: 'Bitcoin Price',
                data: Object.values(res.data.bpi),
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
              }
            ]
          }
        });
      })
      .catch((err) => console.error(err));
  }

  render() {
    let {data, prices, current} = this.state;
    return (
        <Container className="top-lvl-container">
        <h1 xs={1} md={3} lg={6}>Cryptocurrency Tracking Tool</h1>
          <Row>
            <Col>
              <ChooseCurrency
                prices={prices}
                current={current}
              />
            </Col>
          </Row>
          <Row>
            <Chart
              data={data}/>
          </Row>
      </Container>
    );
  };
}

export default App;
