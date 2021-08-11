import React, { useEffect } from 'react'
import Chart from 'react-apexcharts'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import statusCard from '../assets/JsonData/status-card-data.json'
import Badge from '../components/badge/Badge'
import StatusCard from '../components/status-card/StatusCard'
import Table from '../components/table/Table'
import ThemeAction from '../redux/actions/ThemeAction'



const chartOptions = {
    series: [{
        name: "Online Customers",
        data: [40,70,20,90,36,80,61,80,50,97]
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


const latestOrders = {
    header: [
        "order id",
        "user",
        "total price",
        "data",
        "status"
    ],
    body: [
        {
            id: "#001711",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "shipping"
        },
        {
            id: "#001712",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "shipping"
        },
        {
            id: "#001713",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "pending"
        },
        {
            id: "#001714",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "paid"
        },
        {
            id: "#001715",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "refund"
        },
    ]
}

const orderStatus = {
    "shipping": "primary",
    "pending": "warning",
    "paid": "success",
    "refund": "danger"
}

const renderOrderHead = (item, index) => (
    <th key={index}> {item} </th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status} />
        </td>
    </tr>
)

const Dashboard = () => {

    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ThemeAction.getTheme())
    }, [])

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
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: {mode: 'dark'}
                            } : {
                                ...chartOptions.options,
                                theme: {mode: 'light'}
                            }}
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
                            <Table 
                                headData={latestOrders.header}
                                renderHead={(item,index) => renderOrderHead(item,index)}
                                bodyData={latestOrders.body}
                                renderBody={(item,index) => renderOrderBody(item, index)}
                            />
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
