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

const topCustomers = {
    head: [
        'user',
        'total oders',
        'total spending'
    ],
    body: [
        {
            "username": "john doe",
            "order": "490",
            "price": "$15,870"
        },
        {
            "username": "john doe",
            "order": "40",
            "price": "$15,870"
        },
        {
            "username": "john doe",
            "order": "470",
            "price": "$15,870"
        },
        {
            "username": "john doe",
            "order": "890",
            "price": "$15,870"
        },
        {
            "username": "john mitchel",
            "order": "690",
            "price": "$15,870"
        },
        {
            "username": "john doe",
            "order": "49",
            "price": "$15,870"
        }
    ]
}

const renderCustomerHead = (item,index) => (
    <th key={index}> {item} </th>
)

const renderCustomerBody = (item, index) => (
    <tr key={index}>
        <td> {item.username} </td>
        <td> {item.order} </td>
        <td> {item.price} </td>
    </tr>
)

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
                            <Table 
                                headData={topCustomers.head}
                                renderHead={(item,index) => renderCustomerHead(item,index)}
                                bodyData={topCustomers.body}
                                renderBody={(item,index) => renderCustomerBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'> view all </Link>
                        </div>
                        
                    </div>
                </div>
                <div className="col-8">
                    <div className="card">
                        <div className="card__header">
                            <h3>latest orders</h3>
                        </div>
                        <div className="card__body">
                            <Table/>
                        </div>
                        <div className="card__footer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
