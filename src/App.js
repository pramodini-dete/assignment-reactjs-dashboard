import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React from 'react';
import Sidebar from './Component/Sidebar/Sidebar';
import Dashboard from './Component/Sidebar/Dashboard';
import Home from './Component/Sidebar/Home';


function App() {
  return (
    <div className="d-flex">
      <div className='w-auto'> 
      <Sidebar/>
      </div>
      <div className='col overflow-auto'>
        <Dashboard/>
        <div className='col overflow-auto'>
         <Home/>
      </div>
      </div>
    </div>
  );
}

export default App;
