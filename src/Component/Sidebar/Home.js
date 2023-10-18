import React from 'react'
import Piechart from './Piechart'
import Barchart from './Barchart'
import Dashboardtable from './Dashboardtable';




const Home = () => {

  const style = {
    cardSize: {
      height: "400px"
    },
  };

  return (
    <div className='p-3'>
      <div className='conatiner-fluid'>
        <div className='row'>
        </div>
        <div className='row'>

          <div className='col-12-md-8 p-3 w-75'>
            <div className='d-flex justify-content-around p-4 align-items-center bg-white rounded shadow-sm'
              style={style.cardSize}>
              <Barchart />
            </div>
          </div>

          <div className='col-12-md-4 p-3 w-25'>
            <div className='d-flex justify-content-around align-items-center bg-white rounded shadow-sm'
              style={style.cardSize}>
              <div className="container">
                <div className="row">
                  <strong>Customers</strong>
                  <span>Customer that buy product</span>
                </div>
                <div className="row">
                  <Piechart />
                </div>
              </div>
            </div>
          </div>
          <div className='col-12-md-4 p-3 '>
            <div className='d-flex justify-content-around align-items-center bg-white rounded shadow-sm'
              style={style.cardSize}>
              <div className="container">
                <div className="row">
                </div>
                <div className="row">
                  <Dashboardtable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )



}

export default Home