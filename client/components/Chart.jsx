import React from 'react';
import {Line} from 'react-chartjs-2';

  const Chart = ({data}) => {

    return (
        <div>
        <Line
          data={data}
          // type='line'
          options={{
            title:{
              display:true,
              text:'Crypto',
              fontSize:20
            },
            // scales: {
            //   yAxes: [
            //     {
            //       ticks: {
            //         suggestedMin: 0,
            //         suggestedMax: 100
            //       }
            //     }
            //   ]
            // },
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
      </div>
    );
}

export default Chart;
