import React from 'react'
import Chart from 'react-apexcharts'
import { Link } from 'react-router-dom'
import statusCard from '../assets/JsonData/status-card-data.json'
import StatusCard from '../components/status-card/StatusCard'
import Table from '../components/table/Table'


const chartOptions = {
    series: [{
        name: "Online Customers",
        data: [40,70,20,90,36,80,91,60,90,97]
    },{
        name: "Store Customers",
        data: [40,30,70,80,40,16,40,20,51,10]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const Dashboard = () => {
    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            statusCard.map((item,index) => (
                                <div className="col-6" key={index}>
                                    {/* {item.title} */}
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count} 
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        {/* chart */}
                        <Chart
                            options={chartOptions.options}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card__header">
                            <h3> top customers </h3>
                        </div>
                        <div className="card__body">
                            <Table>
                                
                            </Table>
                        </div>
                        <div className="card__footer">
                            <Link to='/'> view all </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
