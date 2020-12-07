import React from 'react';
import {Line} from 'react-chartjs-2';
import Container from 'react-bootstrap/Container';

  const Chart = ({data}) => {

    return (
        <Container className="chart-container">
        <Line className="chart-container"
            data={data}
            options={{
              title:{
                display:true,
                text:'Bitcoin Price',
                fontSize:20,
                fontFamily: "'Scope One', serif",
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      suggestedMin: 9000,
                      suggestedMax: 10000,
                      fontFamily: "'Scope One', serif",
                    }
                  }
                ]
              },
              legend: {
                display:true,
                position:'bottom',
                fontFamily: "'Scope One', serif",
                labels: {
                  fontColor: "#323130",
                  fontFamily: "'Scope One', serif",
                  fontSize: 20
                }
              }
            }}
          />
      </Container>
    );
}

export default Chart;
