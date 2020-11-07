import React from 'react';
import {Line} from 'react-chartjs-2';
import {Container} from 'react-bootstrap';

  const Chart = ({data}) => {
    // zoomArgument: true,

    return (
        <Container>
        <Line
            data={data}
            options={{
              title:{
                display:true,
                text:'Bitcoin Price',
                fontSize:20
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      suggestedMin: 9000,
                      suggestedMax: 10000
                    }
                  }
                ]
              },
              legend: {
                display:true,
                position:'bottom',
                labels: {
                  fontColor: "#323130",
                  fontSize: 20
                }
              }
            }}
          />
      </Container>
    );
}

export default Chart;
