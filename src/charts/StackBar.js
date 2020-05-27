import React from 'react';
import { StackedBar } from '@ant-design/charts';

const StackBar = () => {
  const data = [ 
    {
      Parameters : 'Contributions' , 
      Amount : 4684506.442 , 
    } ,
    {
      Parameters : 'Distributions' , 
      Amount : 4137415.0929999948 , 
    } ,
    {
      Parameters : 'Commitment' , 
      Amount : 2681567.469000001 , 
    } ,
  ] ;
  const config = { 
    forceFit:true, 
    data,
    height: 200,
    colorField: 'Parameters',
    color: ['#88E6B1', '#3E80F7', '#778C99'],
    xField: 'Amount' , 
    yField: 'Parameters', 
    legend: {
      visible: false
    },
    xAxis: {
      title: {
        visible: false
      }
    },
    label: { 
      visible: false, 
      formatter: ( v ) => Math.round( v / 10000 ) + '10000',
    } ,
  } ;
  return < StackedBar { ...config } />;
}

export default StackBar;