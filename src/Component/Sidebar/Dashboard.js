import React from 'react'
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className='p-3'>
            <p className='fs-5'><strong>Hello Shaharukh</strong> <span className='fs-5'>👋,</span> </p>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3'>
                        <div className='d-flex justify-content-around p-4 align-items-center bg-white rounded shadow-sm'>
                            <i className='bi bi-coin fs-2'></i>
                            <div>
                                <span className='heading'>Earning</span>
                                <h5><strong>$198k</strong></h5>
                                <span><i class="bi bi-arrow-up-short">37.8%</i> this month</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3  '>
                        <div className='d-flex justify-content-around p-4 align-items-center bg-white rounded shadow-sm'>
                            <i className='bi bi-file-text fs-2 ' ></i>
                            <div>
                                <span className='heading'>Orders</span>
                                <h5><strong>$2.4k</strong></h5>
                                <span><i class="bi bi-arrow-down-short">2%</i> this month</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3  '>
                        <div className='d-flex justify-content-around p-4 align-items-center bg-white rounded shadow-sm'>
                            <i class="bi bi-wallet fs-2" ></i>
                            <div>
                                <span className='heading'>Balance</span>
                                <h5><strong>$2.4k</strong></h5>
                                <span><i class="bi bi-arrow-down-short">2%</i> this month</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3  '>
                        <div className='d-flex justify-content-around p-4 align-items-center bg-white rounded shadow-sm'>
                            <i class="bi bi-bag-heart fs-2" ></i>
                            <div>
                                <span className='heading'>Total Sales</span>
                                <h5><strong>$89k</strong></h5>
                                <span> <i class="bi bi-arrow-up-short">11% </i>this week</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            </div>
    )
}

export default Dashboard