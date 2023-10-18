import React from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
const Dashboardtable = () => {

    return (
          <MDBTable align='midale'>
            <MDBTableHead>
                <h3>Product Sell</h3>
              <tr>
                <th scope='col'>ProductName</th>
                <th scope='col'>Stock</th>
                <th scope='col'>Price</th>
                <th scope='col'>Totalsale</th>
               
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <img
                      src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                      alt=''
                      style={{ width: '45px', height: '45px' }}
                      className='rounded-circle'
                    />
                    <div className='ms-3'>
                      <p className='fw-bold mb-1'>Abstract3D</p>
                      <p className='text-muted mb-0'>Lorem ipsum dolorsit amet,consectetur adipising elit</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className='fw-normal mb-1'>32 in Stock</p>
                
                </td>
                <td>
                   <strong>$45.99</strong>
                </td>
                <td><strong>20</strong></td>
               
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <img
                      src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                      alt=''
                      style={{ width: '45px', height: '45px' }}
                      className='rounded-circle'
                    />
                    <div className='ms-3'>
                      <p className='fw-bold mb-1'>Sarphens illustration</p>
                      <p className='text-muted mb-0'>Lorem ipsum dolorsit amet,consectetur adipising elit</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className='fw-normal mb-1'>32 in Stock</p>
                 
                </td>
                <td>
               <strong>$45.99</strong>
                </td>
                <td><strong>20</strong></td>
              </tr>
            </MDBTableBody>
          </MDBTable>
  )
}

export default Dashboardtable