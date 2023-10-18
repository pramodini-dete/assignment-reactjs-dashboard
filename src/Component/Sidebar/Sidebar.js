import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./Sidebar.css";
import nature from './nature.png';

const Sidebar = () => {
  const [active, setActive] = useState(1);
  return (
    <div className='sidebar d-flex justify-content-between flex-column  text-white py-3 ps-3 pe-5 p-5 h-100'>
      <div>
        <span className='p-1'>
          <i className='bi bi-hexagon fs-3 me-3'></i>
          <span className='dashboard fs-4'>Dashboard</span>
        </span>
        {/* <hr className='text-white mt-2'/> */}
        <ul className='nav nav-pills flex-column mt-3'>
          <li className={active === 1 ? 'active nav-item p-2 ' : "nav-item p-2"} onClick={e => setActive(1)}>
            <span className='p-1'>
              <i className='bi bi-command fs-3 me-3'></i>
              <span className='fs-5'>Dashboard</span>
            </span>
          </li>
          <li className={active === 2 ? 'active nav-item p-2 ' : "nav-item p-2"} onClick={e => setActive(2)}>
            <span className='p-1'>
              <i className='bi bi-boxes fs-3 me-3'></i>
              <span className='fs-5'>Product</span>
            </span>
          </li>
          <li className={active === 3 ? 'active nav-item p-2 ' : "nav-item p-2"} onClick={e => setActive(3)}>
            <span className='p-1'>
              <i className='bi bi-person-circle fs-3 me-3'></i>
              <span className='fs-5'>Customers</span>
            </span>
          </li>
          <li className={active === 4 ? 'active nav-item p-2 ' : "nav-item p-2"} onClick={e => setActive(4)}>
            <span className='p-1'>
              <i className='bi bi-currency-rupee fs-3 me-3'></i>
              <span className='fs-5'>Income</span>
            </span>
          </li>
          <li className={active === 5 ? 'active nav-item p-2 ' : "nav-item p-2"} onClick={e => setActive(5)}>
            <span className='p-1'>
              <i className='bi bi-slash-circle fs-3 me-3'></i>
              <span className='fs-5'>Promote</span>
            </span>
          </li>
          <li className={active === 6 ? 'active nav-item p-2 ' : "nav-item p-2"} onClick={e => setActive(6)}>
            <span className='p-1'>
              <i className='bi bi-question-square fs-3 me-3'></i>
              <span className='fs-5'>Help</span>
            </span>
          </li>
        </ul>
      </div>

      <div className='nav-item p-2'>
        <span className='p-1'>
          <div className='fs-6'>
            <img src={nature} alt="Nature" />
            <div className='profile-info'>
              <span>Evano</span>
              <h3>Project Manager</h3>
            </div>
            
          </div>
        </span>
      </div>
    </div>

  )
}

export default Sidebar
