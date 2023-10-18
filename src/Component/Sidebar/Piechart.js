import { MDBContainer } from 'mdbreact';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Chart} from 'chart.js'
Chart.register();


const Piechart = () => {
  const data={
    // labels:["Jan","Feb","Mar"],
    datasets:[
      {
        // label:"percent",
        data:[3,8,5],
        backgroundColor:["rgb(251, 84, 112)","rgb(84, 84, 162)"," rgb(241, 238, 238)"],
      
      }
    ],
 
  }
  return (
      <MDBContainer>
       <Doughnut data={data}/>
      </MDBContainer>
  )
}

export default Piechart
