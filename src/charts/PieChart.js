import React from 'react';
import { Pie } from '@ant-design/charts';

const PieChart = () => {
    const data = [ 
        {
          type: 'Property Value',
          value: 3000000,
        },
        {
          type: 'You Invested',
          value: 50000,
        } ,
      ] ;
      const config = { 
        forceFit : true , 
        radius: 0.7,
        height: 200,
        data ,
        style: {
          fontSize: 5
        },
        angleField : 'value' , 
        colorField : 'type',
        label: {
          type: 'spider'
        },
        legend: {
          position: 'bottom-left'
        },
      } ;
      return < Pie { ... config } /> ;  
}

export default PieChart;