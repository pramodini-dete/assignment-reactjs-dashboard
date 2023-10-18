import React from 'react'
import { Bar } from 'react-chartjs-2'
import { MDBContainer } from 'mdbreact';
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js';
Chart.register(CategoryScale);

const Barchart = () => {
    const data={
        labels:["JAN","FEB","MAR",'APRIL','MAY','JUN','JULY','AUG','SEP','OCT','NOV','DEC'],
        datasets:[
          {
            label:"overview montly earning",
            data:[6,4,10,7,8,2,8,11,10,7.5,7,8],
            backgroundColor:"#EFEAFB",
            borderWidth:1,
            borderColor:"white",
          },
        ]
      }
  return (
    
<MDBContainer>
    <Bar data={data}
       style={{maxHeight:'600px'}}
    />
</MDBContainer>
    
  )
}

export default Barchart