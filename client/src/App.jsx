import React from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import Chart from '../components/Chart.jsx';
import {Container} from 'react-bootstrap';

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
      currentPrice: ''
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  };

  getData() {
    // 'https://api.coindesk.com/v1/bpi/currentprice.json'
    //  current: res.data.bpi.USD.rate
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
        .then((res) => {
          this.setState({
            data: {
              labels: Object.keys(res.data.bpi),
              datasets: [
                {
                  label: 'Bitcoin Price',
                  data: Object.values(res.data.bpi),
                  fill: true,
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
    let {data} = this.state;
    return (
        <Container>
            <Chart
              data={data}/>
        </Container>
    );
  };
}

export default App;
